import React from "react";
import './Autism.css';
import Autism1 from '../../Assets/Autism1.jfif';
import Autism2 from '../../Assets/Autism2.jfif';
import Autism3 from '../../Assets/Autism3.jfif';
export default function Autism() {
    const features = [
        {
            description: " Difficulties in verbal and nonverbal communication.",
        },
        {
            description: "Challenges in social interaction and understanding nonverbal cues.",
        },
        {
            description: "Preference for routines and consistent structure.",
        },
        {
            description: "Heightened sensitivity to sensory stimuli such as noise or visual stimuli.",
        },
    ];
    const strategies = [
        {
            title: " Active Listening:",
            description: "Be prepared to listen fully without interruption or prejudgment. Understand what the person is saying before responding.",
        },
        {
            title: "Non-verbal Communication:",
            description:"Use body language and facial expressions to enhance communication and accurately understand emotions.",
        },
        {
            title: " Use Simple and Clear Language: ",
            description: "Maintain the use of simple and clear language, avoid complex language or ambiguous terms.",
        },
        {
            title: "Use Non-verbal Communication:",
            description: " Non verbal communication can be helpful, such as using body language and facial expressions.",
        },
        {
            title: "Structure and Routine:",
            description: ": Create a defined daily structure and routine to provide stability and guidance to the individual.",
        },
        {
            title: " Provide Guidance and Encouragement: ",
            description: " Be guiding and supportive, provide guidance positively and encourage participation and interaction.",
        },
        {
            title: "Use Visual Aids:",
            description: " Images and illustrations may help clarify concepts and facilitate understanding.",
        },
        {
            title:"Interact Calmly and Quietly: ",
            description:"Avoid noise and high volume interactions, try to interact calmly and quietly."
        },
        {
            title:"Respect and Appreciation:",
            description:"Respect the individual with autism as a unique individual and appreciate their unique abilities."
        },
        {
            title:"Understanding and Patience:",
            description:" Be patient and understanding , do not lose hope, as effective communication requires patience and adaptation."
        }
    ];
    const resources = [
        {
            title: "  Autism Speaks: ",
            link:" Autism Speaks Website (https://www.autismspeaks.org/)",
            description: " A leading autism advocacy organization providing resources, support, and information for individuals with autism and their families."
        },
        {
            title: " Autism Society: ",
            link:"  Autism Society Website (https://www.autism-society.org/)",
            description: "  A national organization that provides information, support, and advocacy for individuals with autism and their families."
        },
        {
            title: " National Institute of Mental Health (NIMH):",
            link:" NIMH Autism Spectrum Disorder Information (https://www.nimh.nih.gov/health/topics/autism-spectrumdisorders-asd/index.shtml)",
            description: "NIMH provides valuable information and research on autism spectrum disorder."
        },
        {
            title: "Autism Now:",
            link:" Autism Now Resource Center (http://autismnow.org/)",
            description: "A resource for individuals with autism and their families, providing information on services, support, and advocacy"
        },
        
        
    ];
    
    
    
    
    return(
        <div className="autism">
            <h1>Guide to Interacting with duals with Autism: Valuable Tips and Guidance </h1>
            <img src={Autism1} alt=""/>
            <p>Welcome to the web page Guidelines for Interacting with Individuals with Autism , where we aim to guide and support you in effectively and respectfully interacting with individuals with autism. Autism is a developmental disorder that affects how individuals interact with the world around them. Through this page ,we aim to provide practical and important tips for understanding and positively communicating with individuals with autism.</p>
            <p>Autism Spectrum Disorder (ASD) is a developmental disorder that affects how an individual interacts with the world around them .ASD is characterized by a wide range of symptoms and behaviors,leading to a spectrum of challenges and strengths</p>
            <h2>Some common features of autism spectrum disorder include:</h2>
            <div className="feature">
            {features.map((feature) => (
                        <p style={{marginLeft:"-640px"}}>-{feature.description}</p>

            ))}
            </div>
            <p>Despite the diversity of symptoms, individuals with ASD can also exhibit unique abilities such as high intelligence in specific areas or creative thinking</p>
            <p>A brief understanding of autism spectrum disorder helps in recognizing the challenges individuals with this disorder face and how to provide effective support and interact with them in a meaningful way</p>
            <img src={Autism2} alt=""/>
            <h2 style={{marginLeft:"25px",marginRight:"12px"}}>Here are some important strategies for effective communication with individuals with autism spectrum disorder:</h2>
            <div className="strategies">
                {strategies.map((strategy, index) => (
                    <div key={index} style={{ marginBottom: "20px" }}>
                        <p><strong>{index + 1}. {strategy.title}</strong> {strategy.description}</p>
                    </div>
                ))}
            </div>
            <p>These strategies can help enhance effective communication and build strong and fruitful relationships with individuals with autism spectrum disorder</p>
            <img src={Autism3} alt=""/>
            <h2 style={{marginLeft:"25px",marginRight:"12px"}}>Here are some useful links and resources for individuals with autism spectrum disorder and their families:</h2>
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
                <br></br>
                <h2 className="support">For more information and support, click the button below: </h2>
                <button className="contact-for-support">Contact for Support</button>



        </div>
    );
}
