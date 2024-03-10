const express = require("express");
const app = express();
const bodyParser = require("body-parser"); 
const { dbConnect } = require("./config/DbConnection");
const Profile=require("./Routes/Profile")
const User = require("./Routes/User")
const PORT = 4000; 

// Middleware
app.use(bodyParser.json()); 

// DB Connection
dbConnect();


app.use("/v1",User)
app.use("/v1",Profile)

app.listen(PORT, () => {
  console.log(`Your server is Up and Running on port number ${PORT}`);
});
