import express from "express" ;
import mongoose from "mongoose";
import dotenev from "dotenv";
dotenev.config();

mongoose
   .connect(process.env.MONGO)
   .then(() => {
    console.log('Connected to MongoDb') 
    })
   .catch((err) => {
      console.log(err);
   });

const app = express();

app.listen(3000, () => {
    console.log("Server is Running on port 3000") ;
}) ;