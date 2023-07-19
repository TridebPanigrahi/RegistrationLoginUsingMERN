const mongoose = require("mongoose")

const UserDetailsSchema = new mongoose.Schema(
    {
        name:String,
        phone:{type:String, unique:true}, 
        email:{type:String, unique:true},
        password:String,
        gender:String,
    },
    {
        collation:"UserInfo"
    }
);

mongoose.model("UserInfo", UserDetailsSchema);