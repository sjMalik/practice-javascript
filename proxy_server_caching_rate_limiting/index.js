const express = require('express');
const cors = require('cors');
require("dotenv").config();
const rateLimit = require("express-rate-limit");
const errorHandler = require("./middleware/error");

const port = process.env.PORT || 5000;
const app = express();

// Enable Cors
app.use(cors());

// Rate limiting
// You can do 10 requests max in 10 mins
const limiter = rateLimit({
    windowMs: 10*60*1000, // 10 mins
    max: 10
});
app.use(limiter);
app.set('trust proxy', 1);

// Routes
app.use("/api/v1/", require("./routes"));

// Error Handler middleware
app.use(errorHandler);

app.listen(port, ()=> {
    console.log("Server running on port: ", port); 
})