const express=require("express")
const cors=require("cors")
require("./db/config");
const User=require("./db/User")
const Product=require("./db/Product")

const app=express();

app.use(express.json())
app.use(cors())
app.post("/register",async (req,res)=>{
    let user=new User(req.body);
    let result=await user.save()
    result=result.toObject();
    delete result.pass
    res.send(result)
})

app.post("/login",async (req,res)=>{

    if(req.body.email && req.body.pass)
    {
        let user=await User.findOne(req.body).select("-pass");
    if(user){
        res.send(user)
    }else{
        res.send({"result":"User not found"})
    }}else{
    res.send({"result":"User not found"})
}

})

app.post("/add",async (req,res)=>{
    let product=new Product(req.body);
    let result= await product.save();
    res.send(result)
})

app.get("/product-list",async (req,res)=>{
    let products=await Product.find()
    if(products.length>0){
    res.send(products)
    }else{
        res.send({result:"no products found"})
    }
})

app.delete("/product/:id",async (req,res)=>{

    const result= await Product.deleteOne({_id:req.params.id})
   res.send(result)

})

app.listen(5000,()=>{console.log("port started")});