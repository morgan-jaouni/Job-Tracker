import React, { Component } from 'react';

export default class CreateJob extends Component {

    constructor(props) {
        super(props);

        this.onChangeJobCompany = this.onChangeJobCompany.bind(this);
        this.onChangeJobTitle = this.onChangeJobTitle.bind(this);
        this.onChangeJobDate = this.onChangeJobDate.bind(this);
        this.onChangeJobResponse = this.onChangeJobResponse.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            job_company:'',
            job_title:'',
            job_date:'',
            job_reponse:'No',
        }
    }

    onChangeJobCompany(e) {
        this.setState({
            job_company: e.target.value
        })
    }
    onChangeJobTitle(e) {
        this.setState({
            job_title: e.target.value
        })
    }
    onChangeJobDate(e) {
        this.setState({
            job_date: e.target.value
        })
    }
    onChangeJobResponse(e) {
        this.setState({
            job_response: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Job Company: ${this.state.job_company}`);
        console.log(`Job Title: ${this.state.job_title}`);
        console.log(`Date Applied: ${this.state.job_date}`);
        console.log(`Response: ${this.state.job_response}`);

        this.setState({
            job_company:'',
            job_title:'',
            job_date:'',
            job_reponse:''
        });
        }
    
    render() {
        return (
            <div>
                <p>Create New Job</p>
                <form onSubmit={this.onSubmit}>
                <div>
                    <label>Company:</label>
                    <input 
                    type="text" 
                    value={this.state.job_company || ''} 
                    onChange={this.onChangeJobCompany}></input>
                </div>
                <div>
                    <label>Title:</label>
                    <input 
                    type="text" 
                    value={this.state.job_title || ''} 
                    onChange={this.onChangeJobTitle}></input>
                </div>
                <div>
                    <label>Date:</label>
                    <input 
                    type="text" 
                    value={this.state.job_date} 
                    onChange={this.onChangeJobDate}></input>
                </div>
                <div>
                    <label>Response:</label>
                    <input 
                     type="text"
                     value={this.state.job_response || ''} 
                     onChange={this.onChangeJobResponse}></input>
                </div>
                <div>
                <button type="submit" 
                className="btn btn-primary">Create Job</button>
                </div>
            </form>
            </div>

        )
    }
}
