const express = require('express');
const app = express();
const mongodb = require('mongodb');
const mongoclient = mongodb.MongoClient;
const mongourl = "mongodb://localhost:27017";
const database = "pizzeria";

const bodyParser= require('body-parser');
const urlencodedParser= bodyParser.urlencoded({extended:false})

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With-Content-Type,Accept");
    res.header("Access-Control-Allow-Headers",'Content-Type');
    next(); // invoking the next middleware in the stack
    });
  

app.get('/pizza', (req,res)=>{
    mongoclient.connect(mongourl,(err,result)=>{
        if(err)
        console.log("Error occurred .."+ err);
        else{
                console.log("Connected to database successfully");
                const db = result.db(database);
                db.collection('pizza').find({}).toArray((err,output)=>{
                    if(err)
                        console.log("Error in displaying the output");
                    else{
                        res.json(output);
                    }
                });
        }
        result.close();
    });
  });
  app.get('/ingredients', (req,res)=>{
    mongoclient.connect(mongourl,(err,result)=>{
        if(err)
        console.log("Error occurred .."+ err);
        else{
                console.log("Connected to database successfully");
                const db = result.db(database);
                db.collection('ingredients').find({}).toArray((err,output)=>{
                    if(err)
                        console.log("Error in displaying the output");
                    else{
                        res.json(output);
                    }
                });
        }
        result.close();
    });
  });

  app.listen(3200, ()=>{
    console.log("server runnning")
})