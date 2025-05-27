
import React, { useState, useEffect } from 'react';
import "./JobOppertinuties.css"
import { Link } from 'react-router-dom';
export default function Joboppertinuties() {
  const [jobs, setJobs] = useState([]);
 

  
  useEffect(() => {
    const fetchJobs = async () => {
      const fetchedJobs = [
        { title: "Program Coordinator", workplace: "Syrian Organization For The Disabled", logo:require("../../Assets/photo1.jpg"),},
        { title: "Office Manager", workplace: "For Them We Meet Foundation",logo:require("../../Assets/photo2.jpg")},
        { title: "Project Coordinator", workplace: "International Entrepreneurship Foundation",logo:require("../../Assets/photo3.jpg") },
        { title: "School Teacher", workplace: "Ebsar Charity Association", logo:require("../../Assets/photo4.jpg")},
        { title: "Web Developer", workplace: "Syrian Organization For The Physically Disabled", logo:require("../../Assets/photo5.jpg") },
        { title: "Nurse Assistant", workplace: "Patient Friends Association", logo:require("../../Assets/photo6.jpg") },
        { title: "Caeer Coach", workplace: "Al-Nour Charity Association", logo:require("../../Assets/photo7.jpg") },
        { title: "Assistant Employee", workplace: "Syrian Family Planning Association", logo:require("../../Assets/photo8.jpg") },
        { title: "Store Manager", workplace: "Syrian Red Crescent", logo:require("../../Assets/photo9.jpg")},
        { title: "Sports Coach", workplace: "Young Men's Christian Association",logo:require("../../Assets/photo10.jpg")},
        { title: "Driver", workplace: "Syrian Red Cross", logo:require("../../Assets/photo11.jpg")},
        { title: "Graphic Designer", workplace: "Microsoft Corporation", logo:require("../../Assets/photo12.jpg") },
        
  ];
  setJobs(fetchedJobs);
};
       
    

    fetchJobs();
  }, []);





  return (
    <div>
       <div className="jobcontainer" >
   
             <p className="text-hope" style={{marginBottom:"50px",marginTop:"50px"}}>We hope you find your job oppertinuties here:</p>
        
       <div className="job-opportunities">
          {jobs.map((job, index) => (
        <div key={index} className="job-card">
          <img src={job.logo} alt="" className="job-logo" />
          <h5 className="job-title"><span className='spanJob'>Job:</span>{job.title}</h5>
          <h6 className="job-workplace"><span className='spanJob'>Workplace:</span>{job.workplace}</h6>
          <Link to="/requirementForm">
          <button className="requirements-button" >
          Requirements
          </button>
          
          </Link>
          
        </div>
      
      ))}
      </div>

    </div>
    </div>);
}

