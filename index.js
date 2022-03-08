const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const studentRoutes=require("./routes/student")
const cors=require("cors")


const app = express();
dotenv.config()


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("DBConnection Succesfull");
}).catch((err)=>{
    console.log(err);
})

app.use(cors())
app.use(express.json())
app.use("/api/student" , studentRoutes)

app.listen(process.env.PORT || 5000,()=>{
    console.log("Backend server running!");
})