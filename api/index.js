import express from "express" ;
import mongoose from "mongoose";
import dotenev from "dotenv";
import authRouter from  './routes/auth.route.js';
import userRouter from "./routes/user.route.js";
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

app.use(express.json());

app.listen(3000, () => {
    console.log("Server is Running on port 3000") ;
}) ;

app.use("/api/user",userRouter);
app.use('/api/auth',authRouter);

app.use((err,req,res,next) =>{
   const statusCode = err.statusCode || 500 ;
   const message = err.message || 'Internal Server Error'
   return res.status(statusCode).json({
      success:false,
      statusCode,
      message
   })
});