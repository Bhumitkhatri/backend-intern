const express = require("express");
const router = new express.Router();
const student = require("../models/User");
const studentUser = require("../controllers/studentController");

router.get('/', (req, res) => {
    res.json({ message: "Api is working" })
})

router.get('/newStudents', (req, res) => {
    res.json(student)
})

router.post('/newStudents', async (req, res) => {
    if (!req.body.email) {
        res.status(400)
        return res.json({ error: "email is required..." })
    }
    const user = await studentUser.saveStudents(req.body)
    res.json(user)

})

router.put('/newStudents/:id', (req, res) => {
    let id = req.params.id
    let email = req.body.email
    let firstName = req.body.firstName
    let lastName = req.body.lastName

    let index = student.findIndex((participants) => {
        return (participants.id == Number.parseInt(id))
    })
    if (index >= 0) {
        let std = student[index]
        std.email = email
        std.firstName = firstName
        std.lastName = lastName
        res.json(std)
    }
    else {
        res.status(404)
    }
})

router.delete("/newStudents/:id", (req, res) => {
    let id = req.params.id;
    let index = student.findIndex((participants) => {
        return (participants.id == Number.parseInt(id))
    })
    if (index >= 0) {
        let std = student[index]
        student.splice(index, 1)
        res.json(std)
    } else {
        res.status(404)
    }
})

module.exports = router;