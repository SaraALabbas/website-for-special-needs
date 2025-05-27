
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
// import './App.css'; 
// import './Assets/all.min.css';   
import { BrowserRouter } from "react-router-dom";

const root=ReactDOM.createRoot(document.getElementById('root'));
// eslint-disable-next-line react/jsx-no-undef
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    
    );