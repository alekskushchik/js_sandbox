/******************* Task 1 ********************/
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}, i am ${this.age} years old`);
    }
}
<<<<<<< HEAD
=======

>>>>>>> acba8a8197de3d6af16957b9b53347af1c735f9f
class AlevelStudent extends Human {
    constructor(name, age, marks) {
        super(name, age);
        this.marks = marks;
    }
<<<<<<< HEAD
=======
    
>>>>>>> acba8a8197de3d6af16957b9b53347af1c735f9f
    averageMark() {
        let total = 0;
        for (let i = 0; i < this.marks.length; i++) {
            total += this.marks[i];
        }
        let avgMark = total / this.marks.length;
        return avgMark;
    }
}

const student = new AlevelStudent('Ivan', 19, [5, 3, 5, 1, 4]);

/******************* Task 2 ********************/
class Calculator {
    constructor(result, num = 0) {
        this._result = result;
        this.num = num;
    }
    reset() {
        this._result = 0;
        return this;
    }
    add(num) {
        if (typeof num !== 'number')
        num = 0;
        this._result += num;
        return this;
    }
    sub(num) {
        if (typeof num !== 'number')
        num = 0;
        this._result -= num;
        return this;
    }
    mul(num) {
        if (typeof num !== 'number')
        num = 1;
        this._result *= num;
        return this;
    }
    div(num) {
        if (typeof num !== 'number')
        num = 1;
        this._result /= num;
        return this;
    }
    pow(num) {
        if (typeof num !== 'number')
        num = 1;
        this._result = Math.pow(this._result, num);
        return this;
    }
    sqrt() {
        this._result = Math.sqrt(this._result);
        return this;
    }
    getResult() {
        return this._result;
    }
}
<<<<<<< HEAD
const calc = new Calculator();

/******************* Task 4 ********************/
class CalculatorExtended extends Calculator {
    constructor(num, storage = '') {
        super(num)
        this._storage = storage;
    }
    reset() {
        this._result = 0;
        this._storage = 0;
        return this;
    }
    add(num) {
        if (typeof num !== 'number') num = 0;
        this._result += num;
        this._storage = this._storage + ' + ' + num;
        return this;
    }
    sub(num) {
        if (typeof num !== 'number') num = 0;
        this._result -= num;
        this._storage = this._storage + ' - ' + num;
        return this;
    }
    mul(num) {
        if (typeof num !== 'number') num = 1;
        this._result *= num;
        if (this._result === 0 || this._storage.split('')[this._storage.length - 3] === '*' || this._storage.split('')[this._storage.length - 3] === '/') {
            this._storage = this._storage + ' * ' + num;
        } else {
            this._storage = '(' + this._storage + ') * ' + num;
        }
        return this;
    }
    div(num) {
        if (typeof num !== 'number') num = 1;
        this._result /= num;
        if (this._result === 0 || this._storage.split('')[this._storage.length - 3] === '*' || this._storage.split('')[this._storage.length - 3] === '/') {
            this._storage = this._storage + ' / ' + num;
        } else {
            this._storage = '(' + this._storage + ') / ' + num;
        }

        return this;
    }
    pow(num) {
        if (typeof num !== 'number') num = 1;
        this._result = Math.pow(this._result, num);
        this._storage = '(' + this._storage + ') ^ ' + num;
        return this;
    }
    sqrt() {
        this._result = Math.sqrt(this._result);
        this._storage = String.fromCharCode(8730) + '(' + this._storage + ')'
        return this;
    }
    toString() {
        return this._storage + ' = ' + this._result;
    }
}
const calc2 = new CalculatorExtended();
=======
const calc = new Calculator();
>>>>>>> acba8a8197de3d6af16957b9b53347af1c735f9f
