const db=require('../database');

const bookArray=[
    {name: "Databases", author: "Jim Jones", isbn:"12-34-56-78-1"},
    {name: "JavaScript", author: "Lisa Smith", isbn:"12-34-56-78-1"},
    {name: "SQL", author: "Ann Jones", isbn:"12-34-56-78-1"},
];

const book={
    getAllBooks:function(callback){
        return db.query("select * from book",callback);
    },
    getOneBook:function(id,callback){
        return db.query("select * from book where id_book=?",[id],callback);
    },
    addBook:function(addData,callback){
        return db.query("insert into book(name,author,isbn) values(?,?,?)",[addData.name, addData.author, addData.isbn],callback);
    },
    updateBook:function(addData,id,callback){
        return db.query("update book set name=?, author=?, isbn=? where id_book=?",[addData.name, addData.author, addData.isbn, id],callback);
    },
    deleteBook:function(id,callback){
        return db.query("delete from book where id_book=?",[id],callback);

    }
}

module.exports=book;