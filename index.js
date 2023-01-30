function add(number1,number2){
    return number1 + number2;
}

let calculator ={};
calculator.add = add;
module.exports = calculator;