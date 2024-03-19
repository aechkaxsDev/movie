

const express = require('express');
//to hide user and password
const dotenv = require("dotenv");
//enable route
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");


dotenv.config();

// express app
const app = express();

//mongoDB connection
const mongoose = require ('mongoose');

mongoose.connect(process.env.MONGO_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then (()=>console.log("DB connection Successfull"))
.catch((err)=> console.log(err));


//use route
app.use(express.json());
app.use( "/api/auth",authRoute);
app.use( "/api/users",userRoute);
app.use( "/api/movies",movieRoute);
app.use( "/api/lists",listRoute);



app.listen(8001, ()=>{
  console.log("Backend server is running")
});





