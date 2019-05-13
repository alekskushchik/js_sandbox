/******************* Task 1 ********************/
function removeKeys(object, arr) {
    var result = object;
    Object.keys(object).forEach(function (el) {
        for (var i = 0; i < arr.length; i += 1) {
            if (arr[i] in object) {
                delete object[arr[i]];
            }
        }
    })
    return result;
}

/******************* Task 2 ********************/
function clearNumbers(arr) {
    var result = new Array();

    for (var i = 0; i < arr.length; i += 1) {
        var arr2 = new Array();

        for (var j = 0; j < arr[i].length; j += 1) {
            if (typeof arr[i][j] === 'number' && !isNaN(arr[i][j])) {
                arr2.push(arr[i][j]);
            }
        }
        if (arr2.length > 0) {
            result.push(arr2);
        } else {
            result
        }
    }
    return result
}
/******************* Task 3 ********************/
function reverse(arr) {
    var result = new Array();

    for (var i = arr.length - 1; i >= 0; i -= 1) {
        var str = new String(arr[i]);

        var newStr = '', j;
        for (j = str.length - 1; j >= 0; j -= 1) {
            newStr += str[j];
        } 
        result.push(newStr);
    }
    return result;
}
