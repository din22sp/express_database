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
    addBook:function(addData){
        let sql="insert into book(name,author,isbn) values("+addData.name+","+ addData.author +","+ addData.isbn+")";
        return sql;
    },
    updateBook:function(addData,id){
        let sql="update book set name="+addData.name+", author="+addData.author+", isbn="+addData.isbn+" where id_book="+id;
        return sql;
    },
    deleteBook:function(id){
        let sql="delete from book where id_book="+id;
        return sql;
    }
}

module.exports=book;