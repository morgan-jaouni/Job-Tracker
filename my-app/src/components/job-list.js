import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Job = props => {
    <ul>
        <li>{props.job.job_company}</li>
        <li>{props.job.job_title}</li>
        <li>{props.job.job_date}</li>
        <li>{props.job.job_response}</li>
        <li>
            <Link to={"/edit/"+props.job._id}> Edit </Link>
        </li>

    </ul>
}

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
        return (
            <div>
                <h2>Job-List</h2>
                <ul>
                  <li>
                    { this.jobsList() }
                  </li>
                </ul>
            </div>

        )
    }
}
