const authRoute= require("./router/auth-router");
const contactRoute=require("./router/contact-router");
const serviceRoute=require("./router/service-router");

const express=require("express");
const cors=require("cors");
const app=express();

const connectDb=require("./utils/db");

const errorMiddleware=require("./middlewares/error-middleware");


const corsOptions={
    origin:"*",
    methods: "GET, POST, PUT, DELETE,PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use('/api/auth',authRoute);
app.use('/api/form',contactRoute);
app.use('/api/data',serviceRoute);


app.use(errorMiddleware);


const PORT=5050;


connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running at port: ${PORT} `);
    });
});

