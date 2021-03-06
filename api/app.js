var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var rateLimit = require('express-rate-limit');

//JLPT Data Routers
// var n1DataRouter = require("./routes/n1Data");
// var n2DataRouter = require("./routes/n2Data");
// var n3DataRouter = require("./routes/n3Data");
var n4DataRouter = require("./routes/n4Data");
var n5DataRouter = require("./routes/n5Data");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/testAPI", testAPIrouter);

// JLPT Use
// app.use("/n1Data", n1DataRouter);
// app.use("/n2Data", n2DataRouter);
// app.use("/n3Data", n3DataRouter);
app.use("/n4Data", n4DataRouter);
app.use("/n5Data", n5DataRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
