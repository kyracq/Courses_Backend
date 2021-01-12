const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.set("useFindAndModify", false);

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.courses = require("./course.model.js")(mongoose);

module.exports = db;
