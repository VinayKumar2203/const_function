// create the author constructor function
function createAuthor(name,birthyear,nationality){
  this.name=name;
  this.birthyear=birthyear;
  this.nationality=nationality
}

// /create the book constructor function;
function createBook(title,createAuthor,genre,price){
  this.title=title;
  this.author=createAuthor;
  this.genre=genre;
  this.price=price

  this.getBookInfo=function(){
    console.log(`title:${this.title}`);
    console.log(`author name:${this.author.name}`);
    console.log(`author birthyear:${this.author.birthyear}`);
    console.log(`author nationality:${this.author.nationality}`);
    console.log(`genre:${this.genre}`);
    console.log(`price:${this.price}`);
  }
}
// author 
let author1=new createAuthor ("vinay",2003,"indian")
let author2=new createAuthor ("anmol",2003,"pakistan")


// books
let printInfo=new createBook ("the merchent",author1,"fiction",150);
let getBookInfo2=new createBook ("rich dad poor dad",author2,"fiction",200);


// we can print here ;
 getBookInfo2.getBookInfo();
 printInfo.getBookInfo()
