const express = require("express");
require("./db/conn");
const userRouter = require("./routes/userRoute");
const postRouter = require("./routes/postRoute");
const commentRouter = require("./routes/commentRoute");
const loginRouter = require("./routes/loginRoute");
const likeRouter = require("./routes/likeRoute");
const searchRouter = require("./routes/searchRoute");

const app = express();
const port = process.env.Port || 3000;

app.use(express.json());
app.use(loginRouter);
app.use(userRouter);
app.use(postRouter);
app.use(commentRouter);
app.use(likeRouter); 
app.use(searchRouter);

app.listen(3000 , () => {
    console.log(`Server runs at ${port}`);
})