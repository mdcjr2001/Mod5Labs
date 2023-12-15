const Calculator = require('../libraries/calculator')

exports.multiply = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    
    let product = Calculator.multiply(number1, number2);
    console.log(product);
    res.json({ result: product });
};