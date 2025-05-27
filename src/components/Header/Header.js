import { Link } from 'react-router-dom';
import './HeaderStyle.css' ;
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import React, { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [visibleServices, setVisibleServices] = useState(false);
  const [visibleDevices, setVisibleDevices] = useState(false);
  const [visibleInstructions, setVisibleInstructions] = useState(false);
  const [visibleSearchBox, setVisibleSearchBox] = useState(false);
  const devicesRef = useRef(null);
  const servicesRef = useRef(null);
  const instructionsRef = useRef(null);

  const showServicesList = () => {
    setVisibleServices(!visibleServices);
    if (!visibleServices) {
      setVisibleDevices(false);
    }
  
  };

  const showDevicesList = () => {
    setVisibleDevices(!visibleDevices);
    if (!visibleDevices) {
      setVisibleInstructions(false);
    }
  };

  const showInstructionsList = () => {
    setVisibleInstructions(!visibleInstructions);
   
  };
  const toggleSearchBox = () => {
    setVisibleSearchBox(!visibleSearchBox);
  };

  const handleClickOutside = (event) => {
    if (devicesRef.current && !devicesRef.current.contains(event.target)) {
      setVisibleDevices(false);
    }
    if (servicesRef.current && !servicesRef.current.contains(event.target)) {
      setVisibleServices(false);
    }
    if (instructionsRef.current && !instructionsRef.current.contains(event.target)) {
      setVisibleInstructions(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="header">
        <p>paragraph for feature3</p>
        <div className="headerbar">
          <div className="nav">
            <ul>
              
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li onClick={showServicesList}>Services</li>
              <li><Link to="/joboppertinuties">Job Opportunities</Link></li>
              <li><Link to="/contactUs">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="account">
          <ul>
            <li>
              <i className="fa fa-home fa-2x"  style={{ marginLeft: visibleSearchBox ? '200px' : '0' }}>
            </i>
            </li>
            <li style={{ position: 'relative' }}>
              <i className="fa fa-search fa-2x" onClick={toggleSearchBox}></i>
            </li>
            <li>
              <i className="fas fa-user fa-2x"></i>
            </li>
          </ul>
          <div className='searchBox'  style={{ display: visibleSearchBox ? 'block' : 'none'}}></div>

        </div>
      </div>
      
      <div ref={servicesRef} className="services" style={{ display: visibleServices ? 'block' : 'none', position: 'absolute', zIndex: 999 }}>
        <ul>
          <Link to="/services/medicines"  ><li> Medicines</li></Link>
          <li onClick={showDevicesList}>Medical Devices  <i className="fas fa-caret-right"></i></li>
          <li onClick={showInstructionsList}>Instructions <i className="fas fa-caret-right"></i></li>
        </ul>
      </div>
      
      <div ref={devicesRef} className="Devices" style={{ display: visibleDevices ? 'block' : 'none', position: 'absolute', zIndex: 999 }}>
        <ul>
        <Link to="/services/medical-devices/hemiplegia"> <li >Hemiplegia</li></Link>
        <Link to="/services/medical-devices/quadriplegia"> <li >Quadriplegia</li></Link>
        </ul>
      </div>
      
      <div ref={instructionsRef} className="Instruction" style={{ display: visibleInstructions ? 'block' : 'none', position: 'absolute', zIndex: 999 }}>
        <ul>
          
          <Link to="/services/instructions/hemiplegia"> <li>Hemiplegia</li></Link>
          <Link to="/services/instructions/quadriplegia"> <li>Quadriplegia</li></Link>
         <Link to="/services/instructions/down"> <li className="Down">Down</li></Link>
         <Link to="/services/instructions/autism"> <li>Autism</li></Link>
        </ul>
      </div>
    </header>
  );
}

