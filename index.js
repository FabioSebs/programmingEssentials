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
flowers.push('daffodil') //Adding to array


//Sets
const noDuplicates = new Set()
noDuplicates.add(1)
noDuplicates.add(2)
noDuplicates.add(3)
noDuplicates.add(1)
console.log("------SETS-------" + "\n" + noDuplicates)

// Loops (for ,for/in, for/of, while, do/while)
// FOR
for (let i =0; i < flowers.length; i++) {
    console.log(i + " " + flowers[i]) //Concatenation
}
// FOR/OF (Cleaner way to for loop)
for (let x of cars) {
    console.log(x)
}

// FOR/IN (Object iteration)
for (key in person){  //for/in loop is used for objects
    console.log(key) //gets keys
    console.log(person[key]) //gets values
}

//WHILE
while (i < 10) {
    break
    // i++
}

//Functions
const greet1 = function(name) {
    console.log("Hello "+ name)
}

const greet2 = (name) => {
    console.log("Hello "+ name)
}

//Classes
class Dogs {
    constructor(breed, name, age) {
        this.breed = breed;
        this.name = name;
        this.age = age;
    }

    get breed() {
        return this.breed
    }

    set breed(breed) {
        this.breed = breed
    }

    get name() {
        return this.name
    }

    set name(name) {
        this.name = name
    }

    get age() {
        return this.age
    }

    set age(age) {
        this.age = age
    }
}

