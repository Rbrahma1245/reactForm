import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [jobs, setJobs] = useState([]);

  const searchJobs = async() => {
    console.log(selectedLanguage);
 

    try {
      const { data } = await axios.get(`https://jobs.github.com/positions.json?description=${selectedLanguage}`);
      setJobs(data)
      console.log(data)

  }
  catch (error) {
      console.log(error)
  }


    // fetch(apiUrl)
    //   .then(response => response.json())
    //   .then(data => setJobs(data))
    //   .catch(error => console.error('Error fetching data:', error));
  }

  return (
    <div className="App">
      <div className="container">
        <h1>GitHub Jobs Finder</h1>
        <label htmlFor="programmingLanguage">Select a Programming Language:</label>
        <select
          id="programmingLanguage"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          {/* Add more options as needed */}
        </select>
        <button onClick={searchJobs}>Search Jobs</button>
        <ul>
          {jobs.length === 0 ? (
            <p>No jobs found for the selected language.</p>
          ) : (
            jobs.map(job => (
              <li key={job.id}>
                <h2>{job.title}</h2>
                <p>{job.company}</p>
                <p>{job.location}</p>
                <p>{job.created_at}</p>
                <a href={job.url} target="_blank" rel="noopener noreferrer">
                  View Details
                </a>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
