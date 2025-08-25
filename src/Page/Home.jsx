// import {react} from 'react';
import Nav from '../Components/Navbar.jsx';
import HeroSection from '../Components/HeroSection.jsx'
import BaddiePreview from '../Components/BaddiePreview.jsx';
import WhyChooseUs from '../Components/WhyChooseUs.jsx';
import baddie1 from "../assets/baddie1.png";
import baddie2 from "../assets/baddie2.png";
import videoBg from "../assets/mondana.mp4";



function Home(){
    return(
        <div>
             <Nav />    
             <HeroSection />
             <BaddiePreview />
             <WhyChooseUs images={[baddie1, baddie2]} videoSrc={videoBg} />
        </div>
    )
}


export default Home;