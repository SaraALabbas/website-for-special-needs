import React from "react";
import './ContactUsStyle.css';
import  { useState } from 'react';
import contactPhoto from '../../Assets/ContactPhoto.jpg';
export default function ContactUs(){
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        phoneNumber: '',
        subject: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return(
        <div className="contactUs">
            <div className="background">
                <h1>Contact Form</h1>
            <img src={contactPhoto} alt=""/>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />
            </div>
            <div class="form-group">
        <label for="phone">Phone Number</label>
        <div class="phone-input">
            <select id="country-code" name="country-code">
                <option value="+1">+1 (USA)</option>
                <option value="+20">+20 (Egypt)</option>
                <option value="+966">+966 (Saudi Arabia)</option>
                <option value="+971">+971 (UAE)</option>
                <option valu="+963">+963 (Syria)</option>
            </select>
            <input type="tel" id="phone" name="phone" required placeholder="Phone Number"/>
        </div>
    </div>
            <div className="form-group">
                <label htmlFor="subject">Subject:</label>
                <textarea
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>
            <button   className="submit" type="submit">Send</button>
        </form>

        
        </div>
    )
}