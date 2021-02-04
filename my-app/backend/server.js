
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const jobs = require('./models/Job');
const jobRoutes = express.Router();
const PORT = 4000;

app.use(cors());
app.use('/jobs', jobRoutes);
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/job-list', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})


jobRoutes.route('/').get(function (req,res) {
    jobs.find(function(err, jobs) {

        if (err) {
            console.log(err);
        } else {
            res.json(jobs);
        }

    });
});


app.listen(PORT, function() {
    console.log("Server running on Port: " + PORT );
});