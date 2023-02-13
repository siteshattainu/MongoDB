const express = require('express')
const mongoose = require('mongoose')
const app = express();
//mongoose.set('strictQuery', false);
//Connection
mongoose.connect('mongodb://localhost:27017/learning_mongodb',
    {useNewUrlParser: true, useUnifiedTopology: true }, 
    (err) => {
        if(err){
            console.log("Connection Failed", err);
        }
        else{
            console.log("Connection Success");
        }
    }
)

//Schema
const employeeSchema = new mongoose.Schema({
    name: String,
    position: String,
    regno: Number,
})

//Model
const Employee = new mongoose.model("employee_collection", employeeSchema)

// const data = {name: "Abhishek", position: "SDE", regno: 123}

const new_data = new Employee({name: "Abhishek", position: "SDE", regno: 123})

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/save', async (req, res) => {
    const result = await new_data.save()
    console.log(result)
    res.send(result);
})

app.get('/show', async (req, res) => {
    const result = await Employee.find()
    console.log(result);
    res.send(result);
})

app.listen(5000, () => {
    console.log("Listening on port 5000")
})