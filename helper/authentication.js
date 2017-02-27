var jwt = require('jsonwebtoken');

module.exports = {
  verifyAdmin : (req,res,next)=>{
    var decode = jwt.verify(req.headers.token, process.env.SECRET)
    if(decode.isAdmin){
      next()
    }else{
      res.send("you are an authorized person")
    }
  },
  verifyUser : (req,res,next)=>{
    var decode = jwt.verify(req.headers.token, process.env.SECRET)
    if(!decode){
      res.send("you are an authorized person")
    }else{
      next()
    }
  }
}
