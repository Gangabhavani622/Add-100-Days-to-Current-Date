const express = require("express");

const app = express();
var addDays = require("date-fns/addDays");

let date = new Date();
let result = addDays(date, 100);

app.get("/", (request, response) => {
  response.send(
    `${result.getDate()}-${result.getMonth() + 1}-${result.getFullYear()}`
  );
});

app.listen(3000);

module.exports = app;
