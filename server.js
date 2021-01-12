const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");

// 0. TODO: Create the express application

let corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// 1. TODO: Create a simple route

// TODO: Import routes

// Set port
const PORT = process.env.PORT || 8080;

// 2. TODO: Listen for requests

// TODO: Start connection to database
