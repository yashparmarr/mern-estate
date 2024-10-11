import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
     username :{
        type : String ,
        require : true,
        unique : true 
     },
     email:{
        type : String ,
        require : true,
        unique : true 
     },
     password:{
        type : String ,
        require : true,
     },
     avatar:{
            type: String,
            default: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600"
     }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User ;