
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const jobs = require('./models/Job');
const Job = require('./models/Job');
const jobRoutes = express.Router();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/jobs', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

//Displays all jobs - GET Request
jobRoutes.route('/').get(function (req,res) {
    jobs.find(function(err, jobs) {
        
        if (err) {
            console.log(err);
        } else {
            res.json(jobs);
        }
        
    });
});

//Displays job by id - GET Request
jobRoutes.route('/:id').get(function(req,res) {
    let id = req.params.id;
    Job.findById(id, function(err, job) {
        res.json(job);
    });
});

//Add New Job - POST Request
jobRoutes.route('/add').post(function(req,res) {
    let job = new Job(req.body);
    job.save()
    .then(todo => {
        res.status(200).json({'todo': 'todo added successfully!'})
    })
    .catch(err => {
        res.status(400).send('adding new todo failed');
    })
});

// Update Job - POST Request

jobRoutes.route('/update/:id').post(function(req,res) {

    Job.findById(req.params.id, function(err,job) {

        job.job_company = req.body.job_company;
        job.job_title = req.body.job_title;
        job.job_date = req.body.job_date;
        job.job_response = req.body.job_response;

        job.save().then(job => {
            res.json('Job Updated!')
        })
    .catch(err => {
        res.status(400).send('update not possible!');
    });
  });
});


app.use('/jobs', jobRoutes);


app.listen(PORT, function() {
    console.log("Server running on Port: " + PORT );
});