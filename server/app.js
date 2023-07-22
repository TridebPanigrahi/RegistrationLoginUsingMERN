const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")
const userModel = require("./userDetails")

const app = express();
app.use(express.json())

app.use(cors())

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const { Collection } = require("mongodb");

const JWT_SECRET ="jksdfoiwenf894287ewrhu24r9yoiwefoiuwe98430813hiqfer9713gnjvqbbfhdsihbqw"


// const mongoUrl ="mongodb+srv://tanu:tanu@cluster0.spfyxxp.mongodb.net/?retryWrites=true&w=majority"
const mongoUrl ="mongodb://127.0.0.1:27017/employee"


mongoose.connect(mongoUrl,{
    useNewUrlParser:true
}).then(()=>{console.log("connected to database");})
.catch(e=>console.log(e))


app.post("/register", async(req, res)=>{
   userModel.create(req.body)
   .then((employees)=>{
        res.json(employees)
   })
   .catch((err)=>{
        res.json(err)
   })
});


app.post("/login", (req,res)=>{
    const {email, password} = req.body;
    userModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password === password){
                res.json("Success")
            }
            else{
                res.json("the password is incorrect")
            }
        }
        else{
            res.json("No record existed")
        }
    })
    .catch((err)=>{
        console.log(err)
    })
  
})



// app.post("/login-user", async (req, res)=>{
//     const {email, password} =req.body;

//     const user = await User.findOne({email})
//     if(!user){
//         return res.json({error: "User Not found"})
//     }
//     if(await bcrypt.compare(password, user.password)){
//         const token = jwt.sign({}, JWT_SECRET)
//         if(res.status(201)){
//             res.json({status:"OK", data:token})
//         }
//         else{
//             res.json({error:"error"})
//         }
//     }
//     res.json({status:"error", error:"Invalid Password"})
// });


app.listen(5000,()=>{
    console.log("Server Started")
})

// app.post("/post", async(req,res)=>{
//     console.log(req.body);
//     const {data} =req.body;
//     try {
//         if(data1 == 'trideb'){
//             res.send({status:"ok"})
//         }
//         else{
//             res.send({status:"user not found"})
//         }
//     } catch (error) {
//         res.send({status:"something went wrong try again"})
//     }
// });

// require("./userDetails")

// const User = mongoose.model("UserInfo");

// app.post("/register", async(req, res)=>{

//     const {name, email, mobnum} = req.body;

//     try {
        
//         await User.create({
//             uname:name,
//             email,
//             phoneNum:mobnum,
//         });
//         res.send({status:'ok'})
//     } catch (error) {
//         res.send({status:'error'})
//     }
// })