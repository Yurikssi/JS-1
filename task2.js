// Задание 1
var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2,
//префикс у инкремента увеличивает значение на единицу, а затем присваивает его переменной 
d = b++; alert(d); // 1,
//постфикс у инкремента присваивает значение, а затем увеличивает его на единицу 
c = (2+ ++a); alert(c); // 5 
// a на момент выполнения = 2 и увеличивается на 1 c помощью префикса, т.е. с = 2 + 3 
d = (2+ b++); alert(d); // 4 
//b на момент выполнения = 2, но увеличивается на 1 c помощью постфикса, т.е. d = 2 + 2 
alert (a); // 3 
//так как изначально было 1 и дважды увеличивалось на 1 при операциях 
alert (b); // 3 
//так как изначально было 1 и дважды увеличивалось на 1 при операциях

// Задание 2
var a = 2;
var x = 1 + (a *= 2); //5
//так как действие в скобках умножает переменную 'a' на 2 и присваивает ей полученное значение

// Задание 3
var a = +prompt( 'Введите число a' ),
    b = +prompt( 'Введите число b' ),
if ( isNaN(a) || isNaN(b) ) {
    alert( 'Необходимо ввести числа!' );
}
else if ( a >= 0 && b >= 0 ) {
    alert( a - b );
}
else if ( a < 0 && b < 0) {
    alert( a * b );
}
else {
    alert( a + b );
}
alert( result );

// Задание 4
var a,
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function input_a () {
    a = prompt('Введите число от 1 до 15');
    if (a !== null && (a < 1 || a > 15 || isNaN(a))) {
        input_a();
    }
}
input_a();
switch(a) {
    case 1:
        alert(arr);
        break;
    case 15:
        alert(a);
        break;
    null:
        break;
    default:
        alert(arr.slice(a-1));
}

// Задание 5
function add ( a, b ) {
    return a + b;
}
function sub ( a, b ) { 
    return a - b;
}
function div ( a, b ) { 
    return a / b;
}
function mul ( a, b ) { 
    return a * b;
}

// Задание 6
function mathOperation ( arg1, arg2, operation ) { 
    switch (operation) { 
        case '+': 
            return add ( arg1, arg2 ); 
            break; 
        case '-': 
            return sub ( arg1, arg2 ); 
            break; 
        case '/': 
            return div ( arg1, arg2 ); 
            break; 
        case '*': 
            return mul ( arg1, arg2 ); 
            break; 
    } 
}

// Задание 8
function power( val, pow ) { 
    if ( pow === 0 ) { 
        return 1;
    }
    else {
        return val * power( val, pow - 1);
    }
}