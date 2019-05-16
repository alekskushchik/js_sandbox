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

class AlevelStudent extends Human {
    constructor(name, age, marks) {
        super(name, age);
        this.marks = marks;
    }
    
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
const calc = new Calculator();