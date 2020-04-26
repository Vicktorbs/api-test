const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller')

// router.get('/', (req, res) => {
//     res.send('hellos')
// })

router.post('/registro', UserController.signupUser);

router.post('/ingreso', UserController.signinUser);

router.get('/user-info/:id', UserController.getData)

// api.post('/login', UserController.loginUser);
// api.get('/user/:id', UserController.getUser);
// api.put('/update-user/:id', UserController.updateUser);

module.exports = router