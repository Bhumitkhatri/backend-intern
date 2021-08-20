const student = require("../models/User");

async function saveStudents  (userInput){

    const User = {
        id: student.length + 1,
        email: userInput.email,
        firstName: userInput.firstName,
        lastName: userInput.lastName

    }
    student.push(User)
    return User
}
module.exports = {
    saveStudents
}