const express = require('express')
const router = express.Router();
const UserController = require('../controllers/users.js');


router.post("/", UserController.createUser);


router.get('/:id', UserController.getUser)


router.delete('/:id', UserController.deleteUser);



router.patch('/:id', UserController.updateUser)


module.exports = router