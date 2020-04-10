// Modelos de los datos, para hacer las consultas a la DB
const User = require('../models/user');
// Definicion del objeto
const userController = {};

userController.createNewUser = async (req, res) => {
    const user = new User(req.body)
    await user.save()
    res.json({res: 'Ok'})
};

module.exports = userController;