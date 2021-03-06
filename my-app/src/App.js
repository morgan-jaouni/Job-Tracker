import './App.css';
import React, { Component } from "react"; 
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import JobList from "./components/job-list";
import CreateJob from "./components/create-job";
import EditJob from "./components/edit-job";

class App extends Component {
  render() {
  return (
    <Router>
    <div className="App">
      <Route path="/create" component={CreateJob} />
      <Route path="/edit/:id" component={EditJob} />
      <Route path="/" exact component={JobList} />
    </div>
    </Router>
    );
  }
};

export default App;
