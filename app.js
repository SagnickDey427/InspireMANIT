const express = require("express");
const app = express();
const port = 8080;

//Home route
app.get("/",(req,res)=>{
    res.redirect("/inspire");
})

//Index route
app.get("/inspire",(req,res)=>{
    res.send("This is the inspire home page.");
})

//Gallery route
app.get("/inspire/gallery",(req,res)=>{
    res.send("This is gallery!");
})

//Contact route
app.get("/inspire/contact",(req,res)=>{
    res.send("This is our contact page.");
})

//Members route
app.get("/inspire/members",(req,res)=>{
    res.send("This is Inspire's hall of fame.");
})

app.listen(port, ()=>{
    console.log(`App is running on port : ${port}`);

})