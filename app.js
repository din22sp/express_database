const express=require('express');
const app=express();
const dotenv=require('dotenv');
const jwt = require('jsonwebtoken');
const cors=require('cors');

dotenv.config();

const port=process.env.PORT;
const bookRouter=require('./controllers/book');
const userRouter=require('./controllers/user');
const loginRouter=require('./controllers/login');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

//not protected endpoint
app.use('/login',loginRouter);

//protected endpoints
app.use(authenticateToken);
app.use('/book',bookRouter);
app.use('/user',userRouter);



app.listen(port,function(){
    console.log("My Server is running on port "+port);
});

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    console.log("token = "+token);
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.MY_TOKEN, (err, user) => {
      console.log(err)
  
      if (err) return res.sendStatus(403)
  
      req.user = user
  
      next()
    })
  }

module.exports=app;