const mongoose  = require('mongoose');
const imageData = require('./Helper/initData.js');
const Image = require('./models/Images.js');

const dbUrl ="mongodb+srv://paforsagnick129_db_user:jIBqkns0gGFigBwf@cluster0.sykw6lw.mongodb.net/inspire_db?retryWrites=true&w=majority&appName=Cluster0";

main().then(()=>{
    console.log("Connected to DB successfully.");
}).catch(err=>{
    console.log(err);
})
async function main(){
    await mongoose.connect(dbUrl);
}

const addImage = async ()=>{
    await Image.insertMany(imageData.data);
    console.log('Images inserted successfully.');
}


addImage();