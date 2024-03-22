// console.log("Hello World");

// // objecct literal
// //Single instance

// // const theHobbit = {
// //     Title  : "Nav",
// //     Pages : "Infinite",
// //     checkRead : "Not read",

// //     info : function(){
// //         return ("The Hobbit by "+ this.Title + "," +this.Pages+" pages,"+this.checkRead+" .");
// //     }
// // }

// // console.log(theHobbit.info())

// //constructor
// //multiple instance

// function theHobbit(title, pages, read) {
//   this.Title = title;
//   this.Pages = pages;
//   this.checkRead = read;

//   this.info = function () {
//     return console.log(
//       "The " +
//         this.Title +
//         " has " +
//         this.Pages +
//         " and has been " +
//         this.checkRead
//     );
//   };
// }

// const mybook = new theHobbit("Nav", "Infinity", "Not Read");
// // console.log(mybook.info());

// // console.log(Object.getPrototypeOf(mybook) === theHobbit.prototype)

// //Prototype

// theHobbit.prototype.sayHello = function () {
//   console.log("Hello , I'm a player!");
// };

// mybook.sayHello();
function final() {
  let numb1 = document.getElementById("num1");
  let numb2 = document.getElementById("num2");
  let added = Number(numb1.value) + Number(numb2.value);
  let res = document.getElementById("result");
  res.textContent = added;
}
