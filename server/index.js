const express = require("express");
const app = express();
const { dbConnect } = require("./config/DbConnection");
const Profile = require("./Routes/Profile");
const User = require("./Routes/User");
const Project = require('./Routes/Project')
const cors = require("cors");
const PORT = 4000;

// Middleware
app.use(express.json());

// DB Connection
dbConnect();

// Enable CORS middleware
app.use(cors({
  origin: "*",
}));


// Routes
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: 'Your server is up and running....'
  });
});

app.use("/v1", User);
app.use("/v1", Profile);
console.log("hnnnn")
app.use("/v1",Project)

app.listen(PORT, () => {
  console.log(`Your server is Up and Running on port number ${PORT}`);
});
