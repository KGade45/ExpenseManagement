const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/connectDb");
// config env File
dotenv.config();

// databaseCall
connectDb();

const app = express();

// middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

// Routes

// user routes
app.use("/api/v1/users", require("./routes/userRoute"));

// transaction routes
app.use("/api/v1/transactions", require("./routes/transactionRoute"));


const PORT = 8080 || process.env.PORT

app.listen(PORT,()=>{
    console.log(`running on port ${PORT}`);
});