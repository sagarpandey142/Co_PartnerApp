const express = require("express");
const app = express();
const bodyParser = require("body-parser"); 
const { dbConnect } = require("./config/DbConnection");
const Profile=require("./Routes/Profile")
const User = require("./Routes/User")
const cors = require("cors");
const PORT = 4000; 

// Middleware
app.use(express.json())
// app.use(bodyParser.json()); 
// DB Connection
dbConnect();
// app.use(cors({
//   origin:"exp://192.168.72.20:8081"
// })
// )
app.get("/",(req,res)=>{
  return res.json({
  success:true,
  message:'Your server is up and running....'
});
})


app.use("/v1",User)
app.use("/v1",Profile)

app.listen(PORT, () => {
  console.log(`Your server is Up and Running on port number ${PORT}`);
});
