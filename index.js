//Variables
let x = "I am modifiable!"
const y = "I am a constant you can't change me!";


console.log(x, "\n", y)

//Conditionals (==, !=, ===, !==, >, <, >=, <=, &&, ||, !)
if (x) {
    x = "See I can change!"
    console.log(x)
    if (y) {
        //Error Handling
        try {
            y = "This will make an error"
        } catch (error) {
            console.log("Dont try to change constants!")
        }
    }
}

// Objects
const person = {
    fname: "John",
    lname: "Doe",
    age: 25
};

//Arrays, Sets, Maps
let flowers = ['roses', 'dandelions', 'tulips', 'sunflowers']  //you can change the elements in the list
const cars = ['toyota', 'ford', 'chevrolet', 'jaguar']  //you cant change the elements in the list

//Sets
const noDuplicates = new Set()
noDuplicates.add(1)
noDuplicates.add(2)
noDuplicates.add(3)
noDuplicates.add(1)
console.log("------SETS-------" + "\n" + noDuplicates)

// Loops (for ,for/in, for/of, while, do/while)
for (let i =0; i < flowers.length; i++) {
    console.log(i + " " + flowers[i]) //Concatenation
}

for (let x of cars) {
    console.log(x)
}

for (key in person){  //for/in loop is used for objects
    console.log(key) //gets keys
    console.log(person[key]) //gets values
}




