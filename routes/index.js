var express = require('express');
var router = express.Router();
var userController = require('../controllers/userControllers')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('use /api');
});

router.get('/api/users', userController.verifyAdmin, userController.findAllUser);

router.get('/api/user/:id', userController.verifyUser, userController.findUserById);

router.post('/api/user', userController.verifyAdmin, userController.createUser);

router.put('/api/user/:id', userController.verifyUser, userController.updateUser);

router.delete('/api/user/:id', userController.verifyAdmin, userController.deleteUser);

router.post('/signin', userController.signIn);

router.post('/signup', userController.signUp);

module.exports = router;
