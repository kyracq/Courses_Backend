module.exports = (app) => {
  const courses = require("../controllers/course.controller.js");

  var router = require("express").Router();

  // TODO: Create four routes
  // Create a new Course

  // Retrieve all Courses

  // Retrieve courses for a subject

  // Retrieve courses for a subject

  app.use("/api/courses", router);
};
