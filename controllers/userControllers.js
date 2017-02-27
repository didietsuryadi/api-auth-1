var User = require('../models/user.js')
var jwt = require('jsonwebtoken')
var hash = require('password-hash')
var models = require('../models')
require('dotenv').config()

module.exports = {
  findAllUser : (req,res)=>{
    models.User.findAll().then(function(users){
      res.send(users);
    })
  },
  findUserById : (req,res)=>{
    models.User.findById(req.params.id).then(function (user) {
      res.send(user)
    })
  },
  deleteUser : (req,res)=>{
    models.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(){
      res.send(`data has been deleted for id ${req.params.id}`)
    })
  },
  updateUser : (req,res)=>{
    models.User.update({
      username: req.body.username,
      password: hash.generate(req.body.password),
      email: req.body.email,
      admin: req.body.admin,
      updateAt: new Date()
    }, {
      where: { id: req.params.id },
      returning: true,
      plain: true
    })
    .then(function (result) {
      console.log(result);
      res.send(result[1]);
    });
  },
  createUser : (req,res)=>{
    models.User.create(
      {username: req.body.username,
        password: hash.generate(req.body.password),
        email: req.body.email,
        admin: req.body.admin
      }).then(function (user) {
        res.send(user)
      })
    },
    signUp : (req, res, next)=> {
      models.User.create({
        username: req.body.username,
        password: hash.generate(req.body.password),
        email: req.body.email,
        admin: false
      }).then(function(user){
        res.send(user)
      })
    },

    signIn : (req, res, next)=> {
      models.User.findOne({
        where:{
          username: req.body.username
        }
      }).then(function(user){
        if(!user){
          res.send('user not found')
        }
        if(hash.verify(req.body.password, user.password)){
          var token = jwt.sign({username: user.username, isAdmin: user.admin}, process.env.SECRET, { expiresIn: '1d' });
          res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token
          });
        } else {
          res.send("Wrong Password")
        }

      })}
    }
