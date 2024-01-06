const router= require("./router/auth-router");

const express=require("express");
const app=express();

app.use(express.json());

app.use('/api/auth',router);


const PORT=5050;

app.listen(PORT,()=>{
    console.log(`server is running at port: ${PORT} `);
});