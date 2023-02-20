# Express example

Express.js is a web framework for **node.js**

## Nodemon
You can install nodemon witht the command **npm install nodemon -g**.
You might need to start the cmd as an Administrator to do that.

If you start your applications with nodemon (like nodemon app.js), then
you don't need to restart the application after editing the code.

## Http request params
Example
<pre>
app.get('/sayhello/:fname?',function(request,response){
    response.send("Hello "+request.params.fname);
    console.log(request.params.fname);
});
</pre>
fname is not mandatory, so you can call that like this <br>
http://localhost:3000/sayhello <br>
or like this <br>
http://localhost:3000/sayhello/Lisa <br>
But in this examle 
<pre>
app.get('/sayhello/:fname',function(request,response){
    response.send("Hello "+request.params.fname);
    console.log(request.params.fname);
});
</pre>
fname is mandatory, so this does not work <br>
http://localhost:3000/sayhello <br>

## Database connection

Create a new user example like this:
<pre>
create user libuser@localhost identified by 'libpass';
grant all on library.* to libuser@localhost;
</pre>