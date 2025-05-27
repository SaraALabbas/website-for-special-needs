
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
 import Down from "./pages/Down/Down";
 import Autism from "./pages/Autism/Autism";
 import Header from "./components/Header/Header";
 import Footer from "./components/Footer/Footer";
import JobOppertinuties from "./pages/JobOppertinuties/JobOppertinuties"
import Services from "./pages/Services/Services";
import Instructions from "./pages/ContactUs/ContactUs";
import DevicesHemiplegia from "./pages/DevicesHemiplegia/DevicesHemiplegia";
import DevicesQuadriplegia from "./pages/DevicesQuadriplegia/DevicesQuadriplegia";
import Medicines from "./pages/Medicines/Medicines";
import InstructionHemiplegia from "./pages/InstructionHemiplegia/InstructionHemiplegia";
import RequiermentForm from "./pages/RequiermentForm/RequiermentForm";
import InstructionQuadriplegia from "./pages/InstructionQuadriplegia/Quadriplegia";
import ContactUs from "./pages/ContactUs/ContactUs";
import MedicalDevices from "./pages/MedicalDevices/MedicalDevices";
import Complaints from "./react-dashboard-full/Complaints";
import InstructionsD from "./react-dashboard-full/InstructionsD";
import Orders from "./react-dashboard-full/Orders";




export default function App() {
  return (
    <>
    <Complaints/>


    
{/*     
      <Header/>
       
       <Routes> 
         <Route path="/" element={<Home/>} />
         <Route path="/about" element={<AboutUs/>} />
         <Route path="/services" element={<Services/>}/>
         <Route path="/services/medicines" element={<Medicines/>}/>
         <Route path="/services/medical-devices" element={<MedicalDevices/>}/>

         <Route path="/services/medical-devices/hemiplegia" element={<DevicesHemiplegia/>} />
         <Route path="/services/medical-devices/quadriplegia" element={<DevicesQuadriplegia/>} />
         <Route path="/instructions" element={<Instructions/>}/>
         <Route path="/services/instructions/hemiplegia" element={<InstructionHemiplegia />} />
         <Route path="/services/instructions/quadriplegia" element={<InstructionQuadriplegia/>} />
         <Route path="/services/instructions/autism" element={<Autism />} />
         <Route path="/services/instructions/down" element={<Down/>} />
         <Route>
         <Route path="/joboppertinuties" element={<JobOppertinuties/>} />
         <Route path="/requirementForm" element={<RequiermentForm/>}/>
         </Route>
         <Route path="/contactUs" element={<ContactUs/>}/>

       </Routes> */}


       </>
  )
}





