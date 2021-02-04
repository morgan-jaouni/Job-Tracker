const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Jobs = new Schema({

    job_company: {
        type: String
    },
    job_title: {
        type: String
    },
    job_date: {
        type: String
    },
    job_response: {
        type: String
    }
});

module.exports = mongoose.model('Jobs', Jobs);