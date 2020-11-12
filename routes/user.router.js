const express = require('express');
const api = express.Router();
const UserController = require('../controllers/user.controller')

const multipart = require('connect-multiparty');   
const md_upload = multipart({uploadDir: './uploads/users'});
const md_auth = require('../middlewares/authenticated');
// router.get('/', (req, res) => {
//     res.send('hellos')
// })


api.post('/register', UserController.saveUser);
api.post('/login', UserController.loginUser);
api.get('/user/:id',md_auth.ensureAuth, UserController.getUser);
api.put('/update-user/:id', md_auth.ensureAuth, UserController.updateUser);
api.post('/upload-image-user/:id', [md_auth.ensureAuth, md_upload], UserController.uploadImage);
api.get('/get-image-user/:imageFile', UserController.getImageFile);

// api.post('/login', UserController.loginUser);
// api.get('/user/:id', UserController.getUser);
// api.put('/update-user/:id', UserController.updateUser);

module.exports = api