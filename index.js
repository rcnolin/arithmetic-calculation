const express = require('express'); //importing the express package
const app = express();  //creating an app instance
const port = 3000;
const calc = require('./arithmeticCalc');

app.use(express.urlencoded({extended:true}));

app.post('/', function(req, res){
    let operation = req.body.operation;
    let val1 = parseInt(req.body.val1);
    let val2 = parseInt(req.body.val2);
    let result;
    if (operation == 'add'){
        result = calc.add(val1, val2);
    }else if (operation == 'sub'){
        result = calc.sub(val1, val2);
    }else if (operation == 'mult'){
        result = calc.mult(val1, val2);       
    }else if (operation == 'divi'){
        result = calc.divi(val1, val2);
    }
    console.log(req.body);
    res.send(`Operation: ${operation}\nValue1: ${val1}\nValue2: ${val2}\nResult: ${result}`);
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});