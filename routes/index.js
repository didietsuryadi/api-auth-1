var express = require('express');
var router = express.Router();
var userController = require('../controllers/userControllers')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('use /api');
});

router.get('/api/users', userController.findAllUser);

router.get('/api/user/:id', userController.findUserById);

router.post('/api/user', userController.createUser);

router.put('/api/user/:id', userController.updateUser);

router.delete('/api/user/:id', userController.deleteUser);

module.exports = router;
