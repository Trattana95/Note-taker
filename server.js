const express = require("express");
const fs = require("fs");

var app = express();

var PORT = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));


require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
