
import React, { useState } from "react";
import "./RequiermentForm.css";

export default function FormRequirements(){
  const [fullName, setFullName] = useState("");
  const [yourPhone, setyourPhone] = useState("");
  const [yourSkills, setyourSkills] = useState("");
  const [disabilityType, setDisabilityType] = useState("");
  const [personalPhoto, setpersonalPhoto] = useState(null);
    
 
  const [firstClick, setfirstClick] = useState(false);

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

   
  const validateForm = () => {
    const newErrors = {};
    if (fullName.trim() === "") {
      newErrors.fullName = "Full Name is required.";
    }
    if (yourPhone.trim() === "") {
      newErrors.yourPhone = "Phone number is required.";
    } else if (!/^\d+$/.test(yourPhone)) {
      newErrors.yourPhone = "Phone number must only contain numbers.";
    }
    if (yourSkills.trim() === "") {
      newErrors.yourSkills = "Skills are required.";
    }
    if (disabilityType.trim() === "") {
      newErrors.disabilityType = "Disability type is required.";
    }
    if (!personalPhoto) {
      newErrors.personalPhoto = "A personal photo is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "fullName":
        setFullName(value);
        break;
      case "yourPhone":
        setyourPhone(value);
        break;
      case "yourSkills":
        setyourSkills(value);
        break;
      case "disabilityType":
        setDisabilityType(value);
        break;
      case "personalPhoto":
        setpersonalPhoto(e.target.files[0]);
        break;
      default:
        break;
    }
  };
   
 

   const handleSubmit = (e) => {
    e.preventDefault();
    setfirstClick(true);
    if (validateForm()) {
      console.log("Submitted data:");
      console.log({ fullName, yourPhone, yourSkills, disabilityType, personalPhoto });
      alert("Data were successfully submitted");
      setSubmitted(true);
    }
  };



      return( 
      <div className="containerReq">
      
           <h3>If you are interested in applying for this position ,please complete the following form:</h3>
        
          {submitted ? ( <div className="success-message">
                              <h3>Data were sending successfully</h3>
                          </div>):(
                            
                            <div className="req">
           
                            
                            
                            <form onSubmit={handleSubmit}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter Your Name.. "
            value={fullName}
            onChange={handleChange}
            
          />
           {firstClick && errors.fullName && <p className="error">{errors.fullName}</p>}

         

          <label htmlFor="yourPhone">Your Phone</label>
          <input
            type="text"
            id="yourPhone"
            name="yourPhone"
            placeholder="Enter your Phone.. "
            value={yourPhone}
            onChange={handleChange}
            required
          />
           {firstClick && errors.yourPhone && <p className="error">{errors.yourPhone}</p>}

          <label htmlFor="skills">Your Skills:</label>
          <input 
          id="skills"
           type="text" 
            name="yourSkills"
             placeholder="Write your skills..."
             value={yourSkills}
             onChange={handleChange}
             required
            
               />
           {errors.yourSkills && <p className="error">{errors.yourSkills}</p>}


          <label htmlFor="disabilityType">Type Of Disability</label>
          <input
            type="text"
            id="disabilityType"
            name="disabilityType"
            placeholder="Write your disability.." 
            value={disabilityType}
            onChange={handleChange}
            required
          />
           {errors.disabilityType && (<p className="error">{errors.disabilityType}</p>)}



          <div className="file-inputs">
       
            <div>
              <label htmlFor="personalPhoto">Personal Photo</label>
              <input
                type="file"
                id="personalPhoto"
                name="personalPhoto"
                onChange={handleChange}
                required
              />

              {firstClick && errors.personalPhoto && (<p className="error">{errors.personalPhoto}</p>)}
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>


        <div className="image">
              <img src={require("../../Assets/formRequirements.png")}  alt=""/>
           </div>
        </div>)}
        </div>
        
      
     );
     


}