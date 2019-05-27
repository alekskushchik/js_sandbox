"use strict"
/* Задача 4 */

function func4 (arr = []) {
    if(!Array.isArray(arr)) {
      return undefined;  
    } else {
        let sum = 0, maxSum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        sum += arr[i];
        if (sum > maxSum) {
            maxSum = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    
    if(maxSum == 0) {
        maxSum = arr[0];
        arr.forEach(el => {
            if(maxSum < el) maxSum = element;
        });
    }
    return maxSum;
    }
};

/* Задача 5 */

function func5 (arr = []) {
    return (Array.isArray(arr)) ? 
    arr.join(',').split(',').map(el => +el) : 
    undefined;
}

/* Задача 6 */

const add = (a) =>{
    let sum = a;
    const func = (b) =>{
        if (b) {
            sum += b;
            return func;
        } else {
            return sum;
        }
    };
    func.toString = () => sum;
    return func;
};

/* Задача 3 */

function mask(stringValue = '') {
    if (!stringValue) {
        return undefined;
    } else {
        stringValue = stringValue.toString().split('');
        for (let i = stringValue.length - 5; i >= 0; i -= 1) {
            stringValue[i] = '*';
        }
        stringValue = stringValue.join('');
        return stringValue;
    }
};

/* Задача 6 */

function func6() {
    const M = [];

}
