const router= require("./router/auth-router");

const express=require("express");
const cors=require("cors");
const app=express();

const connectDb=require("./utils/db");


const corsOptions={
    // origin: "http://localhost:5173",
    // origin: "https://qzld1j3b-5173.inc1.devtunnels.ms/register",
    origin:"*",
    methods: "GET, POST, PUT, DELETE,PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use('/api/auth',router);


const PORT=5050;


connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running at port: ${PORT} `);
    });
});

