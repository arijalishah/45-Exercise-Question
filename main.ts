// Personal Message
console.log(`Hello ${"Arij"}, would you like to learn some Python today?`);

// Name Cases
let personName2: string = "Arij shah";
console.log(personName2.toLowerCase());
console.log(personName2.toUpperCase());
console.log(personName2.charAt(0).toUpperCase() + personName2.slice(1).toLowerCase());

// Famous Quote
let quote: string = "A person who never made a mistake never tried anything new.";
let author: string = "Albert Einstein";
console.log(`${author} once said, "${quote}"`);

// Famous Quote 2
let famous_person: string = "Albert Einstein";
let message: string = `${famous_person} once said, "${quote}"`;
console.log(message);

// Stripping Names
let personName3: string = "\t\n   Arij shah \n\t";
console.log(personName3);
console.log(personName3.trim());

// Number Eight
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

// Favorite Number
let favoriteNumber: number = 7;
console.log(`My favorite number is ${favoriteNumber}.`);

// Adding Comments
// Program 1: Personal Message
// Prints a personalized message to a person
// Author: Your Name
// Date: 2024-02-20

let personName4: string = "Arij";
console.log(`Hello ${personName4}, would you like to learn some Python today?`);

// Program 2: Name Cases
// Prints a person's name in lowercase, uppercase, and titlecase
// Author: Your Name
// Date: 2024-02-20

let personName5: string = "Arij shah";
console.log(personName5.toLowerCase());
console.log(personName5.toUpperCase());
console.log(personName5.charAt(0).toUpperCase() + personName5.slice(1).toLowerCase());

// Names
let names: string[] = ["Ahmed", "naeel", "haider"];
names.forEach(name => console.log(name));

// Greetings
let greetings: string = "Hello, ";
names.forEach(name => console.log(`${greetings}${name}!`));

// Your Own Array
let transportation: string[] = ["car", "bicycle", "train"];
transportation.forEach(item => console.log(`I would like to own a ${item}.`));

// Guest List
let guests: string[] = ["Zain", "Mariam", "Idrees"];
guests.forEach(guest => console.log(`Dear ${guest}, you are invited to dinner.`));

// Changing Guest List
let unableToAttend: string = guests.pop()!;
console.log(`${unableToAttend} can't make it to dinner.`);

guests.push("Zeeshan Hussain ");

guests.forEach(guest => console.log(`Dear ${guest}, you are still invited to dinner.`));

// More Guests
console.log("We found a bigger dinner table!");

guests.unshift("Nikola Tesla");
guests.splice(Math.floor(guests.length / 2), 0, "Leonardo da Vinci");
guests.push("Ada Lovelace");

guests.forEach(guest => console.log(`Dear ${guest}, you are invited to the larger dinner.`));

// Shrinking Guest List
console.log("Sorry, we can only invite two people for dinner.");

while (guests.length > 2) {
    let removedGuest: string = guests.pop()!;
    console.log(`Sorry, ${removedGuest}, there's no room for you at dinner.`);
}

guests.forEach(guest => console.log(`Dear ${guest}, you are still invited to dinner.`));

guests.length = 0;
console.log(guests);

// Seeing the World
let placesToVisit: string[] = ["Tokyo", "Paris", "New York City", "South Korea", "Sydney"];
console.log(placesToVisit);

console.log(placesToVisit.sort());

console.log(placesToVisit.reverse());

console.log(placesToVisit.reverse());

console.log(placesToVisit.sort());

console.log(placesToVisit.sort().reverse());

// Dinner Guests
console.log(`We are inviting ${guests.length} people to dinner.`);

// Array of Favorite Things
let favoriteThings: string[] = ["mountains", "beaches", "forests", "waterfalls"];
console.log(favoriteThings);

// Intentional Error
console.log([1, 2, 3][3]); // This will produce an index error since there's no element at index 3

// Conditional Tests
let car: string = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

// More Conditional Tests
// Tests for equality and inequality with strings
let string1: string = "Hello";
let string2: string = "World";
console.log(string1 == string2); // False
console.log(string1 != string2); // True

// Tests using the lower case function
console.log(string1.toLowerCase() == "hello"); // True
console.log(string2.toLowerCase() == "world"); // True

// Numerical tests
let num1: number = 5;
let num2: number = 10;
console.log(num1 > num2); // False
console.log(num1 < num2); // True
console.log(num1 >= num2); // False
console.log(num1 <= num2); // True

// Tests using "and" and "or" operators
let bool1: boolean = true;
let bool2: boolean = false;
console.log(bool1 && bool2); // False
console.log(bool1 || bool2); // True

// Test whether an item is in an array
let fruits: string[] = ["apple", "banana", "orange"];
console.log(fruits.indexOf("banana")); // True

// Test whether an item is not in an array
console.log(!fruits.indexOf("pineapple")); // True

// Alien Colors #1
let alien_color:string = 'green';
if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}

// Alien Colors #2
if (alien_color === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points.");
}

// Alien Colors #3
if (alien_color === 'green') {
    console.log("The player earned 5 points.");
} else if (alien_color === 'yellow') {
    console.log("The player earned 10 points.");
} else if (alien_color
     === 'red') {
    console.log("The player earned 15 points.");
}

// Stages of Life
let age: number = 25;
if (age < 2) {
    console.log("The person is a baby.");
} else if (age < 4) {
    console.log("The person is a toddler.");
} else if (age < 13) {
    console.log("The person is a kid.");
} else if (age < 20) {
    console.log("The person is a teenager.");
} else if (age=25) {
     console. log( " The person is a adult.");
}

// Favorite Fruits
const favoriteFruits: string[] = ['apple', 'banana', 'kiwi'];

if (favoriteFruits.indexOf('banana') !== -1) {
    console.log("You really like bananas!");
}

if (favoriteFruits.indexOf('orange') !== -1) {
    console.log("You really like oranges!");
}

if (favoriteFruits.indexOf('kiwi') !== -1) {
    console.log("You really like kiwis!");
}

if (favoriteFruits.indexOf('strawberry') !== -1) {
    console.log("You really like strawberries!");
}

if (favoriteFruits.indexOf('grape') !== -1) {
    console.log("You really like grapes!");
}


// Hello Admin
const usernames: string[] = ['admin', 'Esha', 'Areej', 'sarah', 'Eshaal'];

if (usernames.length > 0) {
    usernames.forEach(username => {
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    });
} else {
    console.log("We need to find some users!");
}

// Checking Usernames
const currentUsers: string[] = ['Arij', 'Asghar', 'Abrar', 'Sarah', 'Hammad'];
const newUsers: string[] = ['Esha', 'Eshaal', 'Areej', 'Zain', 'sarah'];

newUsers.forEach(newUser => {
    if (currentUsers.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`Sorry, ${newUser} is already taken. Please choose a different username.`);
    } else {
        console.log(`Username ${newUser} is available.`);
    }
});

// Ordinal Numbers
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(number => {
    let suffix: string;
    const lastDigit = number % 10;
    if (number === 11 || number === 12 || number === 13) {
        suffix = 'th';
    } else if (lastDigit === 1) {
        suffix = 'st';
    } else if (lastDigit === 2) {
        suffix = 'nd';
    } else if (lastDigit === 3) {
        suffix = 'rd';
    } else {
        suffix = 'th';
    }
    console.log(`${number}${suffix}`);
});




// Pizzas
const favoritePizzas: string[] = ['Pepperoni', 'Margherita', 'Supreme'];

favoritePizzas.forEach(pizza => {
    console.log(`I like ${pizza} pizza.`);
});

console.log("I really love pizza!");

// Animals
const animals: string[] = ['dog', 'cat', 'rabbit'];

animals.forEach(animal => {
    console.log(`A ${animal} would make a great pet.`);
});

console.log("Any of these animals would make a great pet!");

// T-Shirt
function makeShirt(size: string, message: string): void {
    console.log(`The shirt size is ${size} and it says: ${message}`);
}

makeShirt('large', 'I love TypeScript');
makeShirt('medium', 'I love TypeScript');
makeShirt('small', 'Hello, world!');

// Cities
function describeCity(city: string, country: string = 'Pakistan'): void {
    console.log(`${city} is in ${country}.`);
}

describeCity('Karachi');
describeCity('Islamabad');
describeCity('London', 'United Kingdom');

// City Names
function cityCountry(city: string, country: string): string {
    return `"${city}, ${country}"`;
}

console.log(cityCountry('Lahore', 'Pakistan'));
console.log(cityCountry('New York', 'USA'));
console.log(cityCountry('Sydney', 'Australia'));

// Album
interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function makeAlbum(artist: string, title: string, tracks?: number): Album {
    const album: Album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}

const album1: Album = makeAlbum('Ed Sheeran', 'Divide', 16);
const album2: Album = makeAlbum('Taylor Swift', '1989');
const album3: Album = makeAlbum('Beyonce', 'Lemonade', 12);

console.log(album1);
console.log(album2);
console.log(album3);

// Magicians
function showMagicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

const magicians: string[] = ['Faizan', 'Danish', 'Adnan'];
showMagicians(magicians);

// Great Magicians
function makeGreat(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

const greatMagicians: string[] = makeGreat(magicians);
showMagicians(greatMagicians);

// Unchanged Magicians
const originalMagicians: string[] = ['Faizan', 'Danish', 'Adnan'];
const newMagicians: string[] = makeGreat(originalMagicians.slice());
showMagicians(originalMagicians);
showMagicians(newMagicians);

// Sandwiches
function makeSandwich(...items: string[]): void {
    console.log("Sandwich ordered with:");
    items.forEach(item => {
        console.log("- " + item);
    });
}

makeSandwich('turkey', 'cheese');
makeSandwich('ham', 'lettuce', 'tomato');
makeSandwich('peanut butter', 'jelly');

// Cars
interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function carInfo(manufacturer: string, model: string, options: { [key: string]: any }): Car {
    const car: Car = { manufacturer, model, ...options };
    return car;
}

const car1: Car = carInfo('Toyota', 'Corolla', { color: 'blue', year: 2023 });
console.log(car1);
