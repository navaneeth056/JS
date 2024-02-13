// console.log("Hello World!")
// const myObj = {name:"Navaneeth"};
// console.log(myObj);
// console.log(myObj.name);

// const anotherObj = {
//     name : "Nav",
//     class : "ICE B",
//     CGPA : 8.24*132,
//     hobbies : ["Eat" , "Code" , "Play" , "Sleep"],

//     play: function(){
//         return `time to ${this.hobbies[2]}`;
//     }
// };

// console.log(anotherObj.hobbies[1]);

// console.log(anotherObj.play());


//Inheritance

    // const vehicle ={
    //     name : "BOLERO",
    //     yearOfmanufactur : 2010,
    //     CC : 2993,
    //     condition : "Still Running"
    // };

    // const extraCar = Object.create(vehicle);
    // extraCar.newName = "Thar";
    // console.log(`${extraCar.newName}'s his father is ${extraCar.name}`);

const band = {
    music : "Vicky",
    Guitarist : "Gokul",
    pianoist : "Sandy",
    producer : "Nav"
};
console.log(Object.keys(band));
console.log(Object.values(band));
delete band.music;

console.log(band.hasOwnProperty("music"));

for(let song in band){
    console.log(`${song}  ${band[song]}`);
}


//destructuring

//taking object values and assigning them to variable

const {Guitarist , producer} = band;
console.log(`${Guitarist} and ${producer} are roomates`);

function sings({producer}){
    return  `The producer is ${producer}`;
}

console.log(sings(band));
