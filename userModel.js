import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   name:{
    type: String,
    required: true
   },
   email:{
    type: String,
    required:true,   //email field cannot be empty
    lowercase: true, //Ali@email.com  --- ali@email.com
    trim : true,    //cover spaces 
    unique: true,    
   },
   password:{
   type: String,
   required: true,
   }
},{timestamps: true}
);





export default mongoose.model("User", userSchema);