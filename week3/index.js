'use strict'; // nu ne lasa sa folosim variable fara sa le declaram inainte

declareVar();

function declareVar() {

    console.log('Scope in non arrow', this);
    let b = 2;
    const c = 3;
    if (true) {
        var a = 1;

    }
    console.log('a', a);
    console.log('b', b);
    console.log('c', c);


}


let d = 5;  // Number
let e = "DevSchool";
let f = [1, 2, 3];
let g = {
    key: "value",
};
let h = Symbol('foo');
let i = Symbol('fooo');
console.log(h == i);

console.log(typeof d);

console.log(typeof Nan);

let j = Number('2323')
console.log(j);

let k = 3 / 0;
console.log(k);
console.log("type of infinity", typeof k);

const expr = function () {

    console.log('expression');
};

expr();

console.log('Scope(my current window)', this);

const arrow = (a, b) => {
    console.log('Scope in arrow', this);

    console.log("arrow function");
};

arrow()

// variable numbers of params
function variadic(...args) {
    console.log(args);

}

variadic(2, 3, 4);


function sum(by) {
    let sum = 0;
    return function () {
        sum += by;
        return sum;
    }
}

const sumby = sum(5);
console.log(sumby());
console.log(sumby())


class Rectangle {

    constructor(width, height) {
        this.width = width;
        this.height = height;

    }

    getMeThis() {
        console.log(this);
    }

}

const p = new Rectangle(2, 3);
p.getMeThis();


const Rectangle1 = class Rectangle2 {

    constructor(width, height) {
        this.width = width;
        this.height = height;

    }

    getMeThis() {
        console.log(this);
    }
}
console.log(Rectangle1.name);  // Rectangle2


//----------------------------------

let users = [

    {
        name: "Ion",
        age: 25
    },
    {
        name: "Maria",
        age: 26
    },
    {
        name: "Vasile",
        age: 80
    }
]

users.push({
    name: "Ioana",
    age: 30
})

console.log(users);

let new_users = [
    {
        name: "Alexandra",
        age: 10
    }
]
new_users = new_users.concat(users);
console.log(new_users);

// remove
users.pop();
// first element
users.shift();
//
console.log(users.slice(1, 2));
console.log(users.slice(1));
console.log('Users with age over 40', users.filter(x => x.age > 40));

// splice
// users.splice(1, 2);
// console.log(users);
console.log(users.find(user => user.name === 'Maria'));