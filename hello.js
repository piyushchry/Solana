console.log("Hello World");

console.log(12345678);
console.log(2734864287248728468746n);                  
console.log(true);
console.log(false);
console.log(undefined);
console.log(null);

console.log(typeof 12345678);
console.log(typeof 2734864287248728468746n);
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);


var a = "37862";
a = 93718;
let b;
b = 50;

const c = 20;

console.log(a>b);

if(a>b){
    comsole.log("a is greater than b");
} else {
    console.log("b is greater than a");
}


 const n = 10;
// for
// initialization
// condition
// increment/decrement

for(let i=0; i<n; i++) {
    console.log(i);
}


// compound data types
// object

// json = javascript notation
// key value pair

const a = {
    name: "Piyush",
    surname: "Chaudhary",
    school: {
        name: "Xavier",
        class: "7-11",
    },
};
console.log(a.school.name);
console.log(a.name);

// array - list of consecutive elements
const arr = ["736172",58649287, undefined, true];
console.log(arr[3]);

try{
    console.log(a.university.name);
} catch(arr){
    console.log("something failed");
}

// arguments
function square(n){
    return n*n;
}

console.log(square(2));
