const express = require ('express');
const cors = require ('cors');
const mongoose = require('mongoose');
const router = require('./routes/todoRoutes')

const live_url = "mongodb+srv://ekeneobiora:*******@cluster0.2znpu72.mongodb.net/userDB?appName=Cluster0";
const local_url = "mongodb://localhost:27017/userDB"

mongoose.connect(live_url).then(() => console.log("MongoDB Connected")).catch(err => console.error("Connection Error: ", err));

const app = express();
const port = 1759;
app.use(express.json());
app.use(cors());

//User routes
app.use("/todos", router);

app.get("/" , (req, res) =>{
  res.send('Hello World')
});

app.listen(port, () => {
  console.log(`Server is live on ${port}`);
});
