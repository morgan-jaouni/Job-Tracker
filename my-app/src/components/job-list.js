import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';


const Job = (props) => (
    <ul>
        <li>{props.job.job_company}</li>
        <li>{props.job.job_title}</li>
        <li>{props.job.job_date}</li>
        <li>{props.job.job_response}</li>
    </ul>
)
export default class JobList extends Component {
    constructor(props) {
        super(props);
        this.state = {jobs: []};
    }
    componentDidMount() {
        axios.get('http://localhost:4000/jobs')
            .then(res => {
                this.setState({ jobs: res.data });
            })
            .catch(function (err){
                console.log(err);
            })
    }
    

    jobsList() {
        return this.state.jobs.map(function(currentJob, i) {
            return <Job job={currentJob} key = {i} />;
        })
    }
    render() {

        const jobsList = this.state.jobs.map(job => (
            <div className="jobs-list" key={job._id}>
                <p>{job.job_company}</p>
                <p>{job.job_title}</p>
                <p>{job.job_date}</p>
                <p>{job.job_response}</p>
            </div>
        ))

        return (
            <div>
                <h2>Applied To:</h2>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Response</th>
                        </tr>
                    </thead>
                        { jobsList }
                </table>
            </div>

        )
    }
}
