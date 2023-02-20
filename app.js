const express=require('express');
const app=express();
const port=3000;
const bookRouter=require('./controllers/book');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/book',bookRouter);

app.use(function(request,response,next){
    console.log("I am the first Middleware");
    next();
});

app.get('/',function(request,response){
    response.send("I am the root endpoint");
    console.log("I am the root endpoint");
});

app.use(function(request,response,next){
    console.log("You need to login to be able to use these endpoints");
    next();
});

app.get('/second',function(request,response){
    response.send("This is endpoint /second");
    console.log("Request came");
});

app.get('/sayhello/:fname?',function(request,response){
    response.send("Hello "+request.params.fname);
    console.log(request.params.fname);
});

app.post('/',function(request,response){
    response.send(request.body);
    console.log(request.body);
});

app.listen(port,function(){
    console.log("My Server is running on port "+port);
});


module.exports=app;