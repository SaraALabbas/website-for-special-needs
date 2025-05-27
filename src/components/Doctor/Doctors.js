import doctor1 from '../../Assets/doctor1.jpg';
import doctor2 from '../../Assets/doctor2.jpg';
import doctor3 from '../../Assets/doctor3.jpg';
import doctor4 from '../../Assets/doctor4.jpg';
import './DoctorsStyle.css';
function Doctors(){
    return(
        <div>
             <p className="Doctors_title">Most Famous Physical Therapists</p>
             <p>commit2 for feature1</p>

<div className="DoctorsPanels">
  <div className="Doctors">
  <div>
  <img src={doctor1} className="img1" alt=""></img>
  <h4>Name: Joud AL_Ahmad</h4>
  <h4>Years of Experience: 4 Years</h4>
  <h4>Phone: 09655324778</h4>
  <h4>Address: Homs</h4>
  </div>

  <div>
  <img src={doctor2} className="img2" alt=""></img>
  <h4>Name ALI AL_Mouhamed</h4>
  <h4>Years of Experience:4 Years</h4>
  <h4>Phone: 09945776009</h4>
  <h4>Address: Homs</h4>
  </div>

  <div>
  <img src={doctor3} className="img3" alt=""></img>
  <h4>Name: Noura Khamis</h4>
  <h4>Years of Experience: 5 Years</h4>
  <h4>Phone: 09973446987</h4>
  <h4>Address: Homs</h4>
  </div>

  <div>
  <img src={doctor4} className="img4" alt=""></img>
  <h4>Name: Ahmad AL_Ali</h4>
  <h4>Years of Experience: 10 Years</h4>
  <h4>Phone: 0997776231</h4>
  <h4>Address: Homs</h4>
  
  </div>
</div>
        </div>
        </div>

    );
}
export default Doctors;