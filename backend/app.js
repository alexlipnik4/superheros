const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.json());

const userRouter = require('./routes/superheros');
app.use('/superheros', userRouter)

app.listen(5000, () => {
    console.log('express server started')
})