const express =require('express')
const bodyParser =require('body-parser')
const mongoose =require('mongoose')
const cors =require('cors')
const PORT = 5000
const postRoutes = require('./routes/postRoute')
const env = require("dotenv").config()

const app = express();

app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

app.use("/api/posts",postRoutes )

app.listen(PORT,()=>console.log(`Server running on port :${PORT}`))
mongoose.connect(process.env.mongoURL, {useNewUrlParser: true, useUnifiedTopology:true})
.then(()=>console.log('Database connected Succesfully'))
.catch((error)=> console.log(error.message));