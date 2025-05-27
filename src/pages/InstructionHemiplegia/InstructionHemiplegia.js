import React from "react";
import Hemiplegia1 from '../../Assets/hemiplegia1.jfif';
import Hemiplegia2 from '../../Assets/hemiplegia2.png';
import Hemiplegia3 from '../../Assets/hemiplegia3.jfif';
import  './InstructionHemiplegia.css';
export default function Hemiplegia(){
    const symptoms = [
        "Weakness or stiffness in the muscles.",
        "Muscle spasms or contractions.",
        "Walking disorders.",
        "Balance issues.",
        "Inability to grasp objects.",
        "Memory weakness.",
        "Difficulty concentrating.",
        "Behavioral changes.",
        "Recurrent seizures."
      ];
      const Complications = [
        "Difficulty breathing",
        "Muscle atrophy.",
        "Muscle spasms",
        "Gastrointestinal disorders",
        "Urinary retention",
        "Memory weakness.",
        "Urinary retention"
      ];
      const Treatment=[
        {
            title:"Physical Therapy:",
            description:"Physical therapy helps hemiplegic patients develop balance and coordination skills. Certain movements can also help treat muscle tightness."
        },
        {
            title:"Modified Movement Therapy:",
            description:"This approach involves restricting the unaffected side of the body, which encourages the weaker side to compensate and improve its movement."
        },
        {
            title:"Assistive Devices:",
            description:"In some cases, there may be a need for assistive devices such as a cane, wheelchair, or muscle and movement control devices."
        },
        {
            title:"Mental Imagery:",
            description:"Imagining the movement of the paralyzed side of the body can help stimulate its movement over time. This method is usually accompanied by other techniques."
        },
        {
            title:"Electrical Stimulation:",
            description:"Electrical stimulation helps activate brain function and aids in the contraction of involuntary muscles, typically using electrical pads."
        }
      ];
      const Links=[
        {
            link:"https://www.youtube.com/watch?v=nS4DNCgK9GQ"
        },
        {
            link:"https://m.youtube.com/watch?v=1vXvzzbup7E&pp=ygUPI3JlaGFiYWRjYW1iZXJn"
        },
        {
            link:"https://www.youtube.com/watch?v=A5vBTGh3NF8"
        },
        {
            link:"https://m.youtube.com/watch?v=2rSvNyR5VhU"
        }
      ]
    return(
        <div className="hemiplegia">
            <h1> Guidelines for Dealing with Hemiplegia</h1>
            <img src={Hemiplegia1} alt=""></img>
            <p>Hemiplegia is paralysis that affects only one side of your body. This symptom is often a key indicator of severe or life-threatening conditions like a stroke, but can also happen with conditions and circumstances that aren’t as dangerous.</p>
            <p>Hemiplegia is paralysis, which means you can’t move or control the muscles in the affected body part. That can cause muscles that are completely limp. It can also cause spastic hemiplegia, a type of paralysis where muscles contract uncontrollably. Hemiplegia affects either the right side of your body (right hemiplegia) or the left side of your body (left hemiplegia), with your spine (backbone) being the dividing line between the two halves.</p>
            <p>Hemiplegia may affect your face, arm and leg on one side of your body in various ways: The paralysis may not be present, or not be as severe in all of these three body areas. There are even some rare conditions that cause hemiplegia to come and go, affecting one or both sides of the body as it does.</p>
            <p>Depending on how and why it happens, hemiplegia may be treatable. In some cases, no treatment is necessary, while others need immediate medical care to reverse the cause of the hemiplegia.</p>
            <h1>Here is an image of hemiplegic types :</h1>
            <img src={Hemiplegia2} alt="" />
            <h2>Hemiplegia can affect either the right or left side of the body, and in both cases, it causes symptoms that vary in intensity depending on the individual's condition, such as:</h2>
            <div className="symptoms">
        {symptoms.map((symptom, index) => (
          <p key={index} style={{marginLeft:"-640px"}}>{index + 1}.{symptom}</p>
        ))}
      </div>

      <h2 style={{marginLeft:"-900px"}}>Complications of Hemiplegia:</h2>
      <div className="Complications">
      {Complications.map((Complication, index) => (
        <p key={index} style={{marginLeft:"-640px"}}>{index + 1}.{Complication}</p>
      ))}
    </div>
    <img src={Hemiplegia3} alt=""></img>
    <h2  style={{marginLeft:"-900px"}}>Treatment of Hemiplegia:</h2>
    <div className="Treatment">
                {Treatment.map((treatment, index) => (
                    <div key={index} style={{ marginBottom: "20px" }}>
                         <p >The treatment of hemiplegia depends on its cause and may include the following:</p>
                        <p><strong>{index + 1}. {treatment.title}</strong> {treatment.description}</p>
                    </div>
                ))}
            </div>
            <br></br>
            <h2 style={{marginLeft:"-50px"}}>To watch videos about exercises for the treatment of hemiplegia, here is a collection of links:</h2>
            <div className="Links">
                {Links.map((Link) => (
                    <div className="link-item" >
                         <strong>-Link:</strong><a href={Link.link} target="_blank" rel="noopener noreferrer">{Link.link}</a>                        <br></br>
                        
                    </div>
                ))}
                </div>
                <br></br>
                <h2 className="support">For more information and support, click the button below: </h2>
                <button  className="contact-for-support">Contact for Support</button>


      
            </div>
        );
}
