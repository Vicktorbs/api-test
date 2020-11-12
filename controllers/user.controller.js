var bcrypt = require('bcrypt-nodejs');//modulo para encriptar contraseñas
//var mongoosePaginate = require('mongoose-pagination');
var fs = require('fs');
var path = require('path');
// var moment = require('moment');

var User = require('../models/user');
var jwt = require('../services/jwt');

//crear usuario
//Registro
function saveUser(req, res){
    var params = req.body;//recoge datos de la request, todos los datos que lleguen por post se guardaran en esta variable
    var user = new User();//se guardara el usuario
    console.log(params);

    if(params.name && params.expediente && params.password){
        //setear los datos al objeto del usuario
        user.name = params.name;
        user.surname = params.surname;
        user.expediente = params.expediente;
        user.categoria = params.categoria;
        user.turno = params.turno;
        user.fechaRegistro = params.fechaRegistro;
        user.role = 'ROLE_USER';
        user.image = null;

        //Controlar usuarios duplicados
        User.find({ $or: [//se agrega el or logico que ya incluye mongoDB
            //find busca todos los registros para ver si no hay otro igual
            {expediente: user.expediente}
        ]}).exec((err, users) => {
            if(err) return res.status(500).send({message: 'Error en la peticion de usuarios'});
            if(users && users.length >= 1){
                return res.status(200).send({message: 'El usuario que intentas registrar ya existe!!'});
            }else{
                 //Cifrado de password y guarda los datos
                bcrypt.hash(params.password, null, null, (err, hash) => {//se hace todo el algoritmo de encriptado y genera un hash que es la contraseña guardada en la BD
                    user.password = hash;//cuando se guarde el usuario generara un hash que va a ser la contraseña encriptada que ha generado el bcrypt

                    user.save((err, userStored) => {//al guardar va a tener un error o un usuario guardado
                        if(err) return res.status(500).send({message: 'Error al guardar el usuario'});

                        if(userStored){
                            res.status(200).send({user: userStored});//si se produce correctamente se devuelve el objeto de usuario
                        }else{
                            res.status(404).send({message: 'No se ha registrado el usuario'});
                        }
                    });
                });
            }
        });    
    }else{
        res.status(200).send({
            message: 'Envia todos los campos necesarios'
        });
    }
}
//Login
function loginUser(req, res){
    var params = req.body;//recoge los parametros que lleguen por post

    var expediente = params.expediente;
    var password = params.password;

    User.findOne({expediente: expediente}, (err, user) => {//findOne selecciona un solo registro
        if(err) return res.status(500).send({message: 'Error en la peticion'});

        if(user){
            bcrypt.compare(password.toString(), user.password, (err, check) => {//se compara la password que se recibe con la password que esta en la BD
                // console.log(typeof password.toString());
                // console.log('Comparacion', check);
                if(check){
                    if(params.gettoken){
                        //generar y devolver token
                        return res.status(200).send({
                            token: jwt.createToken(user)
                        });
                    }else{
                        //devolver datos del usuario
                        user.password = undefined;//elimina el encriptado de contraseña de la vista y solo lo deja a vista del back-end
                        return res.status(200).send({user});
                    }
                    
                }else{
                    return res.status(404).send({message: 'Error el usuario no se ha podido identificar'});
                }
            });
        }else{
            return res.status(404).send({message: 'El usuario no se ha podido identificar!!'});
        }
    });
}
// Conseguir datos de un usuario
function getUser(req, res){
    var userId = req.params.id;//se recogen los parametros que llegaran por la URL, cuando llegan datos por la URL se utiliza params, cuando llegan los datos por post o por put se utiliza body

    User.findById(userId, (err, user) => {//va a buscar un documento por la ID
        if(err) return res.status(500).send({message: 'Error en la peticion'});

        if(!user) return res.status(404).send({message: 'El usuario no existe'});

        return res.status(200).send({user});
    });
}
//Devolver un listado de usuarios paginado
function getUsers(req, res){
    var identity_user_id = req.user.sub;

    var page = 1;
    if(req.params.page){
        page = req.params.page;
    }

    var itemsPerPage = 5;

    User.find().sort('_id').paginate(page, itemsPerPage, (err, users, total) => {
        if(err) return res.status(500).send({message: 'Error en la peticion'});

        if(!users) return res.status(404).send({message: 'No hay usuarios disponibles'});
            return res.status(200).send({
                users,
                total,
                page: Math.ceil(total/itemsPerPage)
            });
    });
}
//Edicion de datos de usuario
function updateUser(req, res){
    var userId = req.params.id;
    var update = req.body;

    //borrar la propiedad password
    delete update.password;

    if(userId != req.user.sub){
        return res.status(500).send({message: 'No tienes permiso para actualizar los datos del usuario'});
    }
    User.find({ $or: [
        {expediente: update.expediente}
    ]}).exec((err, users) => {
        var user_isset = false;
        users.forEach((user) => {
            if(user && user._id != userId) user_isset = true;
        });
        if(user_isset) return res.status(404).send({message: 'Los datos ya estan en uso'});
    
        User.findByIdAndUpdate(userId, update, {new:true}, (err, userUpdated) => {
            if(err) return res.status(500).send({message: 'Error en la peticion'});
    
            if(!userUpdated) return res.status(404).send({message: 'No se ha podido actualizar el usuario'});
    
            return res.status(200).send({user: userUpdated});
        });
    });
}
//subir archivos de imagen / avatar de usuario
function uploadImage(req, res){
    var userId = req.params.id;
    if(userId != req.user.sub){
        return res.status(500).send({message: 'No tienes permisos de actualizar datos del usuario'});
    }

    if(req.files){
        var file_path = req.files.image.path;
        console.log(file_path);

        var file_split = file_path.split('/');
        console.log(file_split);

        var file_name = file_split[2];
        console.log(file_name);

        var ext_split = file_name.split('\.');
        console.log(ext_split);

        var file_ext = ext_split[1];
        console.log(file_ext);

        if(userId != req.user.sub){
            return removeFilesOfUploads(res, file_path, 'No tienes permiso para actualizar los datos del usuario');
            
        }

        if(file_ext == 'png' || file_ext == 'jpg' || file_ext == 'jpeg' || file_ext == 'gif'){
            //Actualizar documento de usuario logueado
            User.findByIdAndUpdate(userId, {image: file_name}, {new:true}, (err, userUpdated) => {
                if(err) return res.status(500).send({message: 'Error en la peticion'});

                if(!userUpdated) return res.status(404).send({message: 'No se ha podido actualizar el usuario'});

                return res.status(200).send({user: userUpdated});
            });
        }else{
            return removeFilesOfUploads(res, file_path, 'Extencion no valida');
        }

    }else{
        return res.status(200).send({message: 'No se han subido imagenes'});
    }
}

function removeFilesOfUploads(res, file_path, message){
    fs.unlink(file_path, (err) => {
        return res.status(200).send({message: message});
    });
}

function getImageFile(req, res){
    var image_file = req.params.imageFile;
    var path_file = './uploads/users/'+image_file;

    fs.exists(path_file, (exists) => {
        if(exists){
            res.sendFile(path.resolve(path_file));
        }else{
            res.status(200).send({message: 'No existe la imagen...'});
        }
    });
}


//exportacion
module.exports = {
    saveUser,
    loginUser,
    getUser,
    getUsers,
    updateUser,
    uploadImage,
    getImageFile
}