const db = require("../models");
const Course = db.courses;

// Create and Save a new Course
exports.create = (request, response) => {
  // Validate request
  if (!request.body.title) {
    response.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Course
  const course = new Course({
    title: request.body.title,
    description: request.body.description,
    author: request.body.author,
    viewCount: 0,
    imageUrl: request.body.imageUrl,
    subject: request.body.subject,
  });

  // Save Course in the database
  course
    .save(course)
    .then((data) => {
      response.send(data);
    })
    .catch((err) => {
      response.status(500).send({
        message:
          err.message || "Some error occurred while creating the Course.",
      });
    });
};

// Retrieve all Courses from the database.
exports.findAll = (request, response) => {
  Course.find()
    .then((data) => {
      response.send(data);
    })
    .catch((err) => {
      response.status(500).send({
        message: err.message || "Some error occurred while retrieving courses.",
      });
    });
};
