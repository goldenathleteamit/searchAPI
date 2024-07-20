const express=require('express');
const app=express();
require('./config1');
const Product=require('./product2');

app.use(express.json());

app.get('/search/:key',async(req,res)=>{
    let data=await Product.find(
        {
            "$or":[
                { "name": {$regex:req.params.key}}
            ]
        }
    )
    res.send(data);
});

app.listen(5400);