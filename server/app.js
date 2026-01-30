
const express = require("express");
const app = express();
const port = 8080;
const cors = require('cors');
const Image = require('./models/Images.js');
const Member = require('./models/Members.js');
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


app.get("/members",async (req,res)=>{
    try{
        const memberData = await Member.find({});
        console.log("Found members : ",memberData.length);
        res.json(memberData);
    } catch(err){
        res.status(500).json({error:"Failed to fetch members' data"});
    }
})

app.listen(port, ()=>{
    console.log(`App is running on port : ${port}`);

})