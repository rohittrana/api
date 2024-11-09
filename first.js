const express= require('express');
const app = express()
const port = 3000

function handleSum(req,res){
    var finalSum =0;
    var upto = req.query.counter;
    for(var i =0;i<upto;i++)
    {
        finalSum = finalSum+i;

    }
    var ans =  `sum is ${finalSum}`
    res.send(ans);
}
function factorial (req,res){
    var finalSum = 0;
    var upto = req.query.number;
    for(let i=0;i<upto;i++){
        finalSum*=i;

    }
    var ans = `Sum is ${finalSum}`
    res.send(ans);
}
app.get('/handleSum',handleSum)
app.get('/factorial',factorial)
app.get('/',(req,res)=>{
    res.send('Hello world')
})
app.listen(port ,()=>{
    console.log("Code is running" )
})