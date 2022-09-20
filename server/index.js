const app = require("express")();

const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
require("dotenv").config();

const { setupDb } = require("./db/setupDb");

const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));

app.get("/",async (req, res) => {
    res.send({ message: "Hello! I'm Chatty."});
});

app.use("/api/v1", require("./routes"));

setupDb();

const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

module.exports = server;
