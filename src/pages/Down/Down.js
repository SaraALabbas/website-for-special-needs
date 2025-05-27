import React from "react";
import './Down.css';
import Down1 from '../../Assets/Down1.jpg';
import Down2 from '../../Assets/Down2.jpg';

export default function Down() {

const strategies = [
    {
        title: "Use simple and clear language :",
        description: "Avoid using complex expressions and use simple and clear language when speaking with individuals with Down Syndrome.",
    },
    {
        title: "Active listening :",
        description: "Listen attentively and respectfully to what the person with Down Syndrome is saying, and make sure you understand their feelings and needs.",
    },
    {
        title: "Encourage engagement :",
        description: "Motivate individuals with Down Syndrome to participate and engage by asking simple questions and encouraging them to speak.",
    },
    {
        title: "Provide support and encouragement :",
        description: "Be supportive and encouraging, trust in their abilities, and encourage them to achieve their goals and develop their skills.",
    },
    {
        title: "Use non-verbal communication :",
        description: "Use body language and facial expressions to enhance communication and understand emotions and situations.",
    },
    {
        title: "Respect and flexibility :",
        description: "Be respectful, understanding, and flexible in dealing with the different needs of individuals with Down Syndrome.",
    },
    {
        title: "Create a supportive environment :",
        description: "Establish a motivating and supportive environment that enables individuals with Down Syndrome to feel comfortable and secure.",
    }
];
const guidelines = [
    {
        title: " Personal hygiene:",
        description: " Ensure to maintain the personal hygiene of individuals with Down Syndrome daily, including bathing,changing clothes, and dental care.",
    },
    {
        title: "Physical activity: ",
        description: ": Encourage daily physical activity and movement to maintain physical fitness and health.",
    },
    {
        title: "Healthy nutrition: ",
        description: " Provide balanced and healthy meals,encourage intake of fruits, vegetables, and nutrient-rich foods.",
    },
    {
        title: "Good sleep:",
        description: " Ensure that individuals with Down Syndrome get an adequate amount of good sleep and rest at night.",
    },
    {
        title: "Use non-verbal communication :",
        description: "Use body language and facial expressions to enhance communication and understand emotions and situations.",
    },
    {
        title: " Emotional support:",
        description: "Provide emotional support, love, and care to the individual, and encourage them to express their feelings.",
    },
    {
        title: " General well-being:",
        description: " Create a safe and supportive environment that reflects affection and care, encourages independence, and personal development.",
    },
    {
        title:" Regular healthcare: ",
        description: " Attend to regular medical check-ups and regular medical follow-ups to ensure the health and safety of individuals with Down Syndrome.",

    }
];
const resources = [
    {
        title: "  National Down Syndrome Society:",
        link:" https://www.ndss.org/",
        description: " The organization provides resources and information about Down Syndrome, along with support for individuals affected  and their families."
    },
    {
        title: "Global Down Syndrome Foundation:",
        link:" https://www.ds-health.com/",
        description: "  The website offers information on research, resources, and events related to Down Syndrome."
    },
    {
        title: "a Down Syndrome Center at the University of Massachusetts:",
        link:"https://www.ds-health.com/",
        description: "  The center contains medical articles and resources about Down  Syndrome and healthcare for affected individuals"
    },
    {
        title: "International Down Syndrome Coalition:",
        link:"https://www.ds-int.org/",
        description: "  The association provides resources and information oeducation and support for individuals with Down Syndrome worldwide."
    },
    {
        title: " Online Forums and Communities:",
        link:" DownSyndrome Community",
        description: "  Join online forums and communities such as the  DownSyndrome Community on Facebook or specific Down Syndrome forums to exchange information and support."
    },
    
    
];

    return ( 
        <div className="Down">
            <h1>Guidelines for Dealing with Down Syndrome: Support and guidance for better understanding and comprehensive care.</h1>
            <img src={Down1} alt=""/>
            <p>Welcome to the Down Syndrome Guidance Page, where you will find a comprehensive guide on how to effectively interact with individuals affected by this genetic condition. This guide aims to provide the necessary support and guidance for better understanding and comprehensive care for individuals impacted by Down Syndrome. Learn about effective ways to interact with them, and how to create a supportive and respectful environment to enhance their quality of life and improve their daily experience. Take the initiative to explore the valuable guidance and directions provided here to help you efficiently and lovingly interact with the beloved individuals living with Down Syndrome.</p>
            <p>Down Syndrome is a common genetic condition that results in physical and developmental abnormalities. It is caused by the presence of an extra chromosome in pair 21, and this genetic change affects a variety of physical and intellectual characteristics. Down Syndrome is known to be the main cause of intellectual and developmental delay in children affected by it, requiring special support and utmost care from individuals around them.</p>
            <h2>Here are some effective strategies for communicating and interacting with individuals with Down Syndrome:</h2>
            <div className="strategies">
                {strategies.map((strategy, index) => (
                    <div key={index} style={{ marginBottom: "20px" }}>
                        <p><strong>{index + 1}. {strategy.title}</strong> {strategy.description}</p>
                    </div>
                ))}
            </div>
            <p>Implementing these strategies can help enhance positive communication and interaction with individuals with Down Syndrome and improve their daily experience.</p>
            <img src={Down2} alt=""/>
            <h2 className="gl" >Here are some tips and guidelines for daily care for individuals with Down Syndrome: </h2>
            <div className="guidelines">
                {guidelines.map((guidelines, index) => (
                    <div key={index} style={{ marginBottom: "20px" }}>
                        <p><strong>{index + 1}. {guidelines.title}</strong> {guidelines.description}</p>
                    </div>
                ))}
                </div>
                <p>Implementing these tips can help provide the necessary daily care and support for individuals with Down Syndrome, improving their quality of life and overall well-being.</p>
                <br></br>
                <h2>Here are some useful resources and links that can be utilized for more information and support regarding Down Syndrome:</h2>
                <div className="resources">
                {resources.map((resources, index) => (
                    <div key={index} style={{ marginBottom: "20px" }}>
                        <p><strong>{index + 1}. {resources.title}</strong>
                        <br></br>
                        <strong>-Link:</strong> <a href={resources.link} target="_blank" rel="noopener noreferrer">{resources.link}</a>                        <br></br>
                         -{resources.description}</p>
                    </div>
                ))}
                </div>
                <p>These mentioned resources can help in obtaining more information and support about Down Syndrome and comprehensive care for individuals affected by it.</p>
                <br></br>
                <h2 className="support">For more information and support, click the button below: </h2>
                <button className="contact-for-support">Contact for Support</button>


        </div>
    );
}
