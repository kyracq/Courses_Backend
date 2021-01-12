const db = require("../models");
// Create variable for Course schema

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
    duration: request.body.duration,
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

// 1. TODO: Retrieve all Courses from the database by subject.


// Find course and increment view count by 1
exports.incrementViews = (request, response) => {
  // Validate request
  if (!request.params.courseId) {
    response.status(400).send({ message: "CourseId param missing" });
    return;
  }

  // 2. Update view count for the course
    .then((course) => {
      if (!course) {
        return response.status(404).send({
          message: "Course not found with id " + request.params.courseId,
        });
      }
      response.send(course);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return response.status(404).send({
          message: "Course not found with id " + request.params.courseId,
        });
      }
      return response.status(500).send({
        message: "Error updating course with id " + request.params.courseId,
      });
    });
};
