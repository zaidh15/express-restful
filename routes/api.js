//import express
const express = require('express');
const { route } = require('express/lib/router');

//membuat routing modular
const router = express.Router();

//routing home
router.get("/", (req, res) => {
    res.send("Restful API data Covid by Zaid Hilmi for sned-semester exams")
});

//import controller
const PatientController = require("../controllers/PatientController");

router.get("/patients", PatientController.index);
router.post("/patients", PatientController.store);
router.put("/patients/:id", PatientController.update);
router.delete("/patients/:id", PatientController.destroy);
router.get("/patients/positive", PatientController.positive);
router.get("/patients/recovered", PatientController.recovered);
router.get("/patients/dead", PatientController.dead);
router.get("/patients/:id", PatientController.findById);
router.get("/patients/search/:name", PatientController.search);

//export modul
module.exports = router