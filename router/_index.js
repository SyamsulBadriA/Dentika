const express = require("express");
const adminRouter = require("../router/admin.router");
const patientRouter = require("../router/patient.router");
const {
  validateAuthToken,
  setUser,
  authUser,
  authRole,
} = require("../middleware/app.middleware");
const errorHandler = require("../middleware/errorHandler");
const { ROLE } = require("../utils/utils");
const router = express.Router();

router.use("/admin", adminRouter);
router.use("/patient", patientRouter);
// router.use(validateAuthToken);
// router.use(
//   "/appointment",
//   authRole(ROLE.admin, ROLE.patient),
//   appointmentRouter
// );
router.use(errorHandler);

module.exports = router;
