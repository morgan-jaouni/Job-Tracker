import './App.css';
import React, { Component } from "react"; 
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import JobList from "./components/job-list";
import CreateJob from "./components/create-job";
import EditJob from "./components/edit-job";

class App extends Component {
  render() {
  return (
    <Router>
    <div className="App">
      <h1 class="mt-5">Job-Hunter</h1>

      <nav>
      <ul>
        <li><Link to ="/">Jobs</Link></li>
        <li> <Link to ="/create">Create Job</Link></li>
        <li><Link to ="/edit/:id">Edit Job</Link></li>
      </ul>
      </nav>
      <Route path="/" exact component={JobList} />
      <Route path="/edit/:id" component={EditJob} />
      <Route path="/create" component={CreateJob} />
    </div>
    </Router>
    );
  }
};

export default App;
