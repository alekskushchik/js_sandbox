function print (num){
    let result = '\n';

    for (let i = 0; i < num - 1; i += 1) {
        result += ' '.repeat(i);
        result += '*';
        result += ' '.repeat(num * 2 - i * 2 - 3);
        result += '*\n';
    }

    result += ' '.repeat(num - 1);
    result += '*\n';
    console.log(result)
    return result + '\n';
};

function print2(num) {
    let a = 1;
    let b = num + num - 1;
    let c = b;
    let d = (num + num - 1) * 2 - 1;
    let arrString = [];

    for (let i = 0; i <= (((num + num - 1) * 2 - 1) * num) + num; i += 1) {
        i % ((num + num - 1) * 2) === 0 ? arrString[i] = '\n' : arrString[i] = ' ';

        if (i == a) {
            arrString[i] = '*';
            a += (num + num - 1) * 2 + 1;
        };

        if (num > 1 && i == b) {
            arrString[i] = '*';
            b += ((num + num - 1) * 2 - 1);
        };

        if (num > 1 && i == c) {
            arrString[i] = '*';
            c += (num + num - 1) * 2 + 1;
        };

        if (num > 1 && i == d) {
            arrString[i] = '*';
            d += ((num + num - 1) * 2 - 1);
        };
    }
    let result = arrString.reverse().slice(0, -1).join('') + arrString.slice(0, -((num + num - 1) * 2)).reverse().join('');

    console.log(result);
    return result;
};

module.exports = {
    print,
    print2
};
