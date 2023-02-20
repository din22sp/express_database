const express = require('express');
const controller = express.Router();
const book = require('../models/book_model');

controller.get('/', function (request, response) {
    book.getAllBooks(function(error, dbData){
        if(error){
            response.send(error);
        }
        else{
            response.send(dbData);
        }
    });
});

controller.get('/:id', function (request, response) {
    let data = book.getOneBook(request.params.id);
    response.send(data);
});

controller.post('/', function (request, response) {
    let data = book.addBook(request.body);
    response.send(data);
});

controller.put('/:id', function (request, response) {
    let data = book.updateBook(request.body, request.params.id);
    response.send(data);
});

controller.delete('/:id', function (request, response) {
    let data = book.updateBook(request.params.id);
    response.send(data);
});

module.exports = controller;