import React from "react";
import './QuadriplegiaStyle.css';
import Quadriplegia1 from '../../Assets/Quadriplegia1.jpeg';
import Quadriplegia2 from '../../Assets/Quadriplegia2.jpeg';
import Quadriplegia3 from '../../Assets/Quadriplegia3.jpeg';
export default function Quadriplegia(){
    const symptoms = [
        "Bedsores.",
        "Respiratory failure.",
        " Kidney failure.",
        "Other complications that may occur in the heart, blood vessels, digestive system, and bones.",
        "Bladder and Bowel Control Issues.",
        "Pain or Numbness.",
        "Pain or Numbness.",
        
      ];
      const Treatment=[
        {
            title:"Measures Included in the Treatment of Quadriplegia:",
            description:"Among the measures included in the treatment of spinal cord injury patients are: Activating manual strength,Devices for exhalation and coughing, Medications to dilate the airways and treat bacterial infections, aimed at addressing the common respiratory disorder associated with paralysis of the abdominal muscles, Mechanical ventilation, especially in cases of diaphragm paralysis.,Permanent changes in body position, sleeping on special mattresses to prevent and treat bedsores; sometimes medications and surgeries are also needed."
        },
        {
            title:" Medical Care and Manual Assistance:",
            description:"Medical care and manual assistance from a specialized therapist, along with training, guidance, and assistive equipment, all fall under a therapeutic system that also includes:Treatment of sphincters,Treatment of sexual and fertility issues,Achieving the highest possible level of functional performance for the patient."
        },
        {
            title:"Modern Treatments:",
            description:"Treatment is conducted using small devices implanted in the body that automatically inject antispasmodic medications directly into the fluid surrounding the spinal cord, in addition to activating respiratory muscles and limbs through electrical stimulators.Artificial muscles, which are currently under research and development, could be a very helpful factor for these patients in the near future.Psychological therapies and adapting the home environment help the patient adjust to the lifestyle imposed on them and achieve a reasonable quality of life despite the injury."
        },
        {
            title:"Therapeutic Development for Quadriplegia:",
            description:"Recently, there has been a radical change in the medical effects of these injuries on patients, thanks to a new therapeutic approach applied in the mid-20th century for similar cases that previously led to death within three years. The result is that life now continues for decades after the injury."
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
        <div className="Quadriplegia">
             <h1> Guidelines for Dealing with Quadriplegia</h1>
             <img src={Quadriplegia1} alt="" />
             <p>Quadriplegia is a serious medical condition that affects an individual's ability to move and feel in all four limbs, leading to the loss of the ability to perform daily activities independently. This condition is considered a result of a severe injury or disease affecting the spinal cord or brain, which disrupts the nerve signals that control movement and sensation.</p>
             <p>The effects of quadriplegia are comprehensive, as they not only impact physical movement but also extend to psychological and social aspects. Many individuals affected by this condition face challenges in adapting to their new circumstances, which requires ongoing psychological and social support.</p>
             <p>In this context, scientific research plays a vital role in understanding the causes of quadriplegia and developing effective treatments. Additionally, advancements in medical technology, such as advanced prosthetics and assistive technologies, are opening new horizons for improving the lives of individuals affected by this condition.</p>
             <img src={Quadriplegia2} alt=""/>
             <h2 style={{marginLeft:"-640px"}}>Here are the common symptoms of quadriplegia:</h2>
             <p>Complications can arise from the disruption of communication between body parts and the brain, and the most important complications include:</p>
             <div className="symptoms">
        {symptoms.map((symptom, index) => (
          <p key={index} style={{marginLeft:"-400px"}}>{index + 1}.{symptom}</p>
        ))}
      </div>
      <h2  style={{marginLeft:"-900px"}}>Treatment of Quadriplegia:</h2>
      <p>The treatment of quadriplegia includes medications, some physical and educational methods, and assistive devices, both traditional and modern. Below is an explanation:</p>
      <div className="Treatment">
                {Treatment.map((treatment, index) => (
                    <div key={index} style={{ marginBottom: "20px" }}>
                         <p >The treatment of hemiplegia depends on its cause and may include the following:</p>
                        <p><strong>{index + 1}. {treatment.title}</strong> {treatment.description}</p>
                    </div>
                ))}
            </div>
            <div className="Links">
                {Links.map((Link) => (
                    <div className="link-item" >
                         <strong>-Link:</strong><a href={Link.link} target="_blank" rel="noopener noreferrer">{Link.link}</a>                        <br></br>
                        
                    </div>
                ))}
                </div>
                <br></br>
                <h2 className="support">For more information and support, click the button below: </h2>
                <button className="contact-for-support">Contact for Support</button>





        </div>
    );
}