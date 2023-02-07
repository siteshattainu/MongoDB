const mongoose = require('mongoose')
const express = require('express')
const app = express()

//learning_mongodb => name of the new database

mongoose.connect('mongodb://localhost:27017/learning_mongodb',
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if(err){
            console.log("Connection Failed", err);
        }
        else{
            console.log("Connection Successful");
        }
    }
)

const studentSchema = new mongoose.Schema({
    name: String,
    class: String,
    roll: Number,
    no_of_subjects: Number,
})

const Student = new mongoose.model("NewCollection", studentSchema)

const student1 = new Student({name: "Abhishek", roll: 1, no_of_subjects: 7})

const insertData = async () => {
    const result = await student1.save()
    console.log(result)
}

insertData()

app.listen(5000, () => {
    console.log("Listening on port 5000")
})