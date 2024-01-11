const router= require("./router/auth-router");

const express=require("express");
const app=express();

const connectDb=require("./utils/db");

app.use(express.json());

app.use('/',router);


const PORT=5050;


connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running at port: ${PORT} `);
    });
});

