import './FooterStyle.css';
import '@fortawesome/fontawesome-free/css/all.min.css';   

export default function Footer(){
    return(
        <div className="footer">
            <span>Medicines</span>
            <div className="icons">

                  <i className="fas fa-medkit"></i>
                  <i className="fas fa-procedures"></i>
                  <i className="fas fa-prescription-bottle-alt"></i>
                  <i className="fas fa-pills"></i>
            

            </div>
            <div className="container_1">
                



            <ul className="Follow"> 
                <li>Follow Us :
                    <ul className="social-media">
                        <div className="FI">
                        <li><i className="fab fa-instagram"></i></li>
                        <li><i className="fab fa-facebook"></i></li>
                        </div>
                        <li><a href=" ">For Ask</a>
                    <i className="fas fa-question-circle"></i>
                </li>
                    </ul>
                </li>
                </ul>
                <ul className="pages">
                <li><a href="./ ">Home</a></li>
                <li><a href="./Services">Services</a></li>
                <li><a href=" ./about">About us</a></li>
                <li><a href="./joboppertinuties ">Job opportunities</a></li>
                <li><a href="./contactUs ">Contuct Us</a></li>
                </ul>
            

        <div className="contact">
            <p>Connect Us:</p>
            <p><i className="fas fa-phone-alt"></i> 012345678</p>
            <p><i className="fas fa-mobile-alt"></i> 012345678</p>
        </div>
    </div>
    </div>

    

    );

}