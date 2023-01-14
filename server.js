const express = require("express");
const app = express();
require("dotenv").config();
const dbconfig = require("./config/dbconfig");
app.use(express.json());
const userRoute = require("./routes/userRoute");
const port = process.env.PORT || 5000;
app.use("/api/user", userRoute);
app.listen(port, () => console.log(`Node Server Started at ${port}`));