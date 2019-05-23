function calculate() {
    let result = {
        'history': [],
        'formula': '',
        'args': {}
    };

    function askUser() {
        const userKeyPress = prompt('Введите клавишу 1 для выбора расчета по формуле y = kx + b.\nВведите клавишу 2 для расчета по формуле y = x^2.\nВведите exit, если необходимо закончить расчеты.', '');

        function isNumber(n) {
            return !isNaN(parseFloat(n)) && !isNaN(n - 0)
        }
        let _exit = 'no';

        function choise1() {
            result.args = {};
            function kValue() {
                let k = prompt('Введите значение k для расчета функции y = kx + b.\nВведите exit, если нужно закончить расчеты.', '');
                if (k == 'exit' || k == null) {
                    _exit = 'exit';
                    result.history.push(_exit);
                    return result;
                } else {
                    switch (isNumber(k)) {
                        case true:
                            result.args.k = k;
                            break;
                        case false:
                            kValue();
                            break;
                    }
                }
                return result;
            }
            function xValue() {
                let x = prompt('Введите значение x для расчета функции y = kx + b.\nВведите exit, если необходимо закончить расчеты.', '');
                if (x == 'exit' || x == null) {
                    _exit = 'exit';
                    result.history.push(_exit);
                    return result;
                } else {
                    switch (isNumber(x)) {
                        case true:
                            result.args.x = x;
                            break;
                        case false:
                            xValue();
                            break;
                    }
                }
                return result;
            }

            function bValue() {
                let b = prompt('Введите значение b для расчета функции y = kx + b.\nВведите exit, если необходимо закончить расчеты.', '');
                if (b == 'exit' || b == null) {
                    _exit = 'exit';
                    result.history.push(_exit);
                    return result;
                } else {
                    switch (isNumber(b)) {
                        case true:
                            result.args.b = b;
                            break;
                        case false:
                            bValue();
                            break;
                    }
                }
                return result;
            }

            if (_exit !== 'exit') kValue();
            result.history.push(result.args.k);

            if (_exit !== 'exit') xValue();
            result.history.push(result.args.x);

            if (_exit !== 'exit') bValue();
            result.history.push(result.args.b);

            result.formula = 'y = kx + b';

            if (exit !== 'exit' && result.args.k !== null && result.args.x !== null && result.args.b !== null) alert(`y = ${result.args.k * result.args.x + result.args.b}`);
            return result;
        };

        function choise2() {
            result.args = {};
            function xValue() {
                let x = prompt('Введите значение x для расчета функции y = x^2.\nВведите exit, если необходимо закончить расчеты.', '');
                if (x == 'exit' || x == null) {
                    _exit = 'exit';
                    result.history.push(_exit);
                    return result;
                } else {
                    switch (isNumber(x)) {
                        case true:
                            result.args.x = x;
                            break;
                        case false:
                            xValue();
                            break;
                    }
                }
                return result;
            }

            if (_exit !== 'exit') xValue();
            result.history.push(result.args.x);

            result.formula = 'y = x^2';

            if (_exit !== 'exit' && result.args.x !== null) alert(`y = ${result.args.x * result.args.x}`);
            return result;
        };

        switch (userKeyPress) {
            case '1':
                choise1();
                repeat();
                break;
            case '2':
                choise2();
                repeat();
                break;
            case 'exit':
                result.history.push('exit');
                break;
            case null:
                break;
            default:
                calculate();
                break;
        };
        return result;
    }
    askUser();
    return result;
};
