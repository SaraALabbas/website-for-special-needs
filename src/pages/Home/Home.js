
import Elderly from '../../Assets/Elderly Joy on the Beach_ A Selfie Moment.jpeg';
import'./Home.css';
import Doctors from '../../components/Doctor/Doctors';
import Footer from "../../components/Footer/Footer";

export default function Home(){
    return(
        <>
        <div className="Home">
            <div>
            <p>Together We Make a Difference: Special Care for Unique Souls</p>
            <button className="ordernow">Order Now</button>
            </div>
            <div>
            <img src={Elderly} alt=""/>
            </div>
           
        </div>
        <Doctors/>
        <Footer/>
        </>
    );
}