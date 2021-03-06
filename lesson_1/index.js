// Task 1
function makeGreetings (userAge){
    var a = userAge%10, b = userAge%100;

    if ((a >= 5 && a <= 10) || a == 0 || (b >= 11 && b <= 15)){
        return 'Мой возраст ' + userAge + ' лет';
    }
    else if (a == 1){
        return 'Мой возраст ' + userAge + ' год';
    }
    else {
        return 'Мой возраст ' + userAge + ' года';
    }
}

// Task 2
function splitArray (array, lengthOfSplit){
    var array2 = [];
for(var i = 0; i < array.length; i += 1){
    array2.push(array.splice(i, lengthOfSplit, 2));
}
    return array2;
}

// Task 3
function add(a) {
    return function(b) {
        return a + b;
    }
}

// Task 4
function transformData(array) {
    const obj = new Object();

    for (var i = 0; i < array.length; i += 1) {
        if (array[i].mark > 5) {
            var key = array[i].login;
            var value = array[i].firstName;

            if (array[i].firstName == '' || array[i].lastName == '') {
                value;
            }
            else {
                value = array[i].firstName + ' ' + array[i].lastName;
            }
                
            obj[key] = value;
        }
    }
    
    return obj;
}
