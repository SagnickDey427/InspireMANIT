
const express = require("express");
const app = express();
const port = 8080;
const cors = require('cors');
const Image = require('./models/Images.js');
const mongoose  = require('mongoose');
const path = require("path");
require('dotenv').config({ path: path.join(__dirname, '.env') });

const corsOptions = {
    origin : ["http://localhost:5173"]
}

app.use(cors(corsOptions));

//📌 Establishing connection with DB
const dbUrl = process.env.ATLASDB_URL;

main().then(()=>{
    console.log("Connected to DB successfully.");
}).catch(err=>{
    console.log(err);
})
async function main(){
    await mongoose.connect(dbUrl);
}


app.get("/gallery",async (req,res)=>{
    try {
        const imageData = await Image.find({});
        console.log("Found images:", imageData.length); // Good for debugging
        res.json(imageData); 
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch images" });
    }
})


// //Home route
// app.get("/",(req,res)=>{
//     res.redirect("/inspire");
// })

// //Index route
// app.get("/inspire",(req,res)=>{
//     res.send("This is the inspire home page.");
// })

// //Gallery route
// app.get("/inspire/gallery",(req,res)=>{
//     res.send("This is gallery!");
// })

// //Contact route
// app.get("/inspire/contact",(req,res)=>{
//     res.send("This is our contact page.");
// })

// //Members route
// app.get("/inspire/members",(req,res)=>{
//     res.send("This is Inspire's hall of fame.");
// })

app.listen(port, ()=>{
    console.log(`App is running on port : ${port}`);

})