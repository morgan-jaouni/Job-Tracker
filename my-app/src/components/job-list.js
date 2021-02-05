import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

const Job = (props) => (
    <tr>
        <td>{props.job.job_company}</td>
        <td>{props.job.job_title}</td>
        <td>{props.job.job_date}</td>
        <td>{props.job.job_response}</td>
        <td>
            <Link to={"/edit/"+props.job._id}>Edit</Link>
        </td>
    </tr>
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
        const jobsList = this.state.jobs.map(function(currentJob,i) {
            return <Job job={currentJob} key={i} />;
    });

return (
        <div>
             <nav>
             <h1 className="mt-3">Believer</h1>
                <ul>
                     <li><Link to ="/edit/:id">Edit Job</Link></li>
                     <li> <Link to ="/create">Create Job</Link></li>
                     <li><Link to ="/">Jobs</Link></li>
                 </ul>
             </nav>

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
