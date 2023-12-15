const Calculator = require('../libraries/calculator')

exports.add = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);

    let sum = Calculator.add(number1, number2); 
    console.log(sum);
    res.status(200).json({ result: sum });
};