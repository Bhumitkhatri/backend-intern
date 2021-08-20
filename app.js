const express = require('express')
const students = require('./models/User');
const studentRouter = require("./routers/student");

const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(7000, () => {
    console.log('listening on port 7000');

})
console.log(students);