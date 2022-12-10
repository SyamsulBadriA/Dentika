const express = require("express");
const PatientController = require("../controllers/patient.controllers");
const { validateAuthToken } = require("../middleware/app.middleware");
const router = express.Router();

router.post("/login", PatientController.login);
router.post("/register", PatientController.register);
router.get("/token", PatientController.refreshToken);
router.delete("/logout", PatientController.logout);

router.post("/addPatient", PatientController.addDataPatient);
module.exports = router;
