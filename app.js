const express = require("express"),
    path = require("path"),
    logger = require("morgan");
app = express();

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");


app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const indexRouter = require("./routes/index");

app.use("/", indexRouter);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("app listening on port " + port));