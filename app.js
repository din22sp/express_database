const express=require('express');
const app=express();
const port=3001;
const bookRouter=require('./controllers/book');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/book',bookRouter);


app.listen(port,function(){
    console.log("My Server is running on port "+port);
});


module.exports=app;