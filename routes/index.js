var express = require('express');
var router = express.Router();
var userController = require('../controllers/userControllers')
var auth = require('../helper/authentication')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('use /api');
});

router.get('/api/users', auth.verifyAdmin, userController.findAllUser);

router.get('/api/user/:id', auth.verifyUser, userController.findUserById);

router.post('/api/user', auth.verifyAdmin, userController.createUser);

router.put('/api/user/:id', auth.verifyUser, userController.updateUser);

router.delete('/api/user/:id', auth.verifyAdmin, userController.deleteUser);

router.post('/signin', userController.signIn);

router.post('/signup', userController.signUp);

module.exports = router;
