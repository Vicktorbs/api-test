// Modelos de los datos, para hacer las consultas a la DB
const User = require('../models/user');
// Definicion del objeto
const userController = {};
const hash = 'JHykd7HbjL!eYp^XWR=E'
const jwt = require('jsonwebtoken')


userController.signupUser = async (req, res) => {
    console.log(req.body);
    
    const {name, surname, password, expediente, categoria, turno, role, fechaRegistro, image} = req.body;
    const newUser = new User({name, surname, password, expediente, categoria, turno, role, fechaRegistro, image});
    await newUser.save();
	// const token = await jwt.sign({_id: newUser._id}, hash);
    res.status(200).json({"Estatus": "Ok"});
};

userController.signinUser = async (req, res) => {
    const { expediente, password } = req.body;

    const user = await User.findOne({expediente});

    if (!user) return res.status(401).send('The record doen\' exists');
    if (user.password !== password) return res.status(401).send('Wrong Password');
    const nameUser = `${ user.name } ${ user.surname }`
    const userId = user._id

    const token = await jwt.sign({_id: user._id}, hash);

    return res.status(200).json({token, nameUser, userId});
}

userController.getData = async (req, res) => {
    const {id} = req.params;

    const user = await User.findById(id)
    res.json(user)
}

module.exports = userController;
