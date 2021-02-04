import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Job = props => {
    <tr>
        <td>{props.job.job_company}</td>
        <td>{props.job.job_title}</td>
        <td>{props.job.job_date}</td>
        <td>{props.job.job_response}</td>
        <td>
            <Link to={"/edit/"+props.job._id}> Edit </Link>
        </td>

    </tr>
}

export default class JobList extends Component {
    constructor(props) {
        super(props);
        this.state = {jobs: []};
    }
    componentDidMount() {
        axios.get('http://localhost:4000/jobs/')
            .then(res => {
                this.setState({ jobs: res.data });
            })
            .catch(function (error){
                console.log(error);
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
                    { this.jobsList() }
            </div>

        )
    }
}
