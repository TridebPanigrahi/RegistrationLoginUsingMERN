const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("./userDetails")

const app = express();
app.use(express.json())

app.use(cors())


const { Collection } = require("mongodb");

const JWT_SECRET ="jksdfoiwenf894287ewrhu24r9yoiwefoiuwe98430813hiqfer9713gnjvqbbfhdsihbqw"


// const mongoUrl ="mongodb+srv://tanu:tanu@cluster0.spfyxxp.mongodb.net/?retryWrites=true&w=majority"
const mongoUrl ="mongodb://127.0.0.1:27017/employee"


mongoose.connect(mongoUrl,{
    useNewUrlParser:true
}).then(()=>{console.log("connected to database");})
.catch(e=>console.log(e))


app.post("/register", async(req, res)=>{
    const {name, phone, email, password, gender} =req.body;
    const encriptedPassword = await bcrypt.hash(password, 10)
   try {
    const oldUser = await userModel.findOne({email})
    if(oldUser){
       return res.json("userexist")
    }
    else{
        await userModel.create({
            name,
            phone,
            email,
            password:encriptedPassword,
            gender
        })
        .then((employees)=>{
             res.json(employees)
        })
        .catch((err)=>{
             res.json(err)
        })
    }

   } catch (error) {
        res.json(error)
   }
});


app.post("/login", async(req,res)=>{
    const {email, password} = req.body;
    const user = await userModel.findOne({email:email})
    if(!user){
       return res.json("User not Exist")
    }
    else{
        if(await bcrypt.compare(password, user.password)){
            const token = jwt.sign({},JWT_SECRET)
            if(res.status(201)){
                return res.json({status:"Success", data:token})
            }
            else{
                return res.json({status:"error"})
            }
        }
        else{
            res.json("the password is incorrect")
        }
    }
  
})

// app.post("/userdata", async(req, res)=>{
//     const {token} = req.body;
//     try {
        
//         const secret = jwt.verify(token, JWT_SECRET)
//         const useremail = secret.email;
//         secret.findOne({email:useremail})
//         .then((data)=>{
//             res.send({status:"OK", data:data})
//         })
//         .catch((err)=>{
//             res.send({status:"error", data:err})
//         })

//     } catch (error) {
        
//     }
// })



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