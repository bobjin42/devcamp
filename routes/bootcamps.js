const express = require("express");
const {
  getBootcamp,
  getBootcamps,
  createBootcamps,
  updateBootcamp,
  deleteBootcamp,
} = require("../controller/bootcamp");

const router = express.Router();

router.route("/").get(getBootcamps).post(createBootcamps);

router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
