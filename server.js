const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const connectDb = require("./db/db");
const cors = require('cors')
const userRouter = require('./routes/userRoute')
// const postRouter = require('./routes/postRoutes')
// const reactRouter = require('./routes/reactRoutes')
// const followRouter = require('./routes/followersRoutes')
const bodyParser = require('body-parser')



// middlewares 
app.use(express.json());
app.use(cors())
app.use(bodyParser())



// routes 

app.use('/api/v1/auth',userRouter)
// app.use('/api/v1/posts',postRouter)
// app.use('/api/v1/comment',commentRouter)
// app.use('/api/v1/reacts',reactRouter)
// app.use('/api/v1/follow',followRouter)

app.get("/", (req, res) => {
  res.send('welcome')
})


const run = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => console.info("Server is running...."));
  } catch (error) {
    console.info(`ERROR:${error.message}`)
  }
};

run();