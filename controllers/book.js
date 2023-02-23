const express = require('express');
const controller = express.Router();
const book = require('../models/book_model');

controller.get('/', function (request, response) {
    book.getAllBooks(function(error, dbData){
        if(error){
            response.send(error);
        }
        else{
            response.json(dbData);
        }
    });
});

controller.get('/:id', function (request, response) {
    book.getOneBook(request.params.id,function(error, dbData){
        if(error){
            response.json(error);
        }
        else{
            //return only the first object
            response.json(dbData[0]);
        }
    });
});

controller.post('/', function (request, response) {
    book.addBook(request.body,function(error,dbData){
        if(error){
            response.json(error);
        }
        else{
            response.json(dbData);
        }
    })
});

controller.put('/:id', function (request, response) {
    book.updateBook(request.body, request.params.id,function(error, dbData){
        if(error){
            response.json(error);
        }
        else{
            response.json(dbData);
        }
    });
});

controller.delete('/:id', function (request, response) {
    book.deleteBook(request.params.id,function(error, dbData){
        if(error){
            //to the frontend
            response.json("Something went wrong");
            //to console
            console.log(error);
        }
        else {
            response.json(dbData);
        }
    });
});

module.exports = controller;