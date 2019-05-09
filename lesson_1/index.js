// TASK 1

var userAge;

function makeGreetings (userAge){
    var a = userAge%10; b = userAge%100;

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

// TASK 2
function splitArray(arr, length){ 
        var arr = [];
        for (var i = 0; i < length; i += 1) {
            arr.split(arr);
        }
        return arr;
}



