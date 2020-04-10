const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller')

// router.get('/', (req, res) => {
//     res.send('hellos')
// })
router.post('/register', UserController.createNewUser);
// api.post('/login', UserController.loginUser);
// api.get('/user/:id', UserController.getUser);
// api.put('/update-user/:id', UserController.updateUser);

module.exports = router