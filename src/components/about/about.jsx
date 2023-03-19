


import "../about/about.css"
import pic from "../images/Resume.pdf"
import pic2 from "../images/home.svg"
import { Link } from "react-router-dom"
const About=()=>{
    return(
        <div className="About">
            <p className="contact-tittle about-tittle">About me</p>
           
            <div className="box">
              <div className="box2">
              <div className="info"> <div className="info1"><p className="tittle1">Student</p>
            <p> Hello! My Name in NIkhil Lende, Completed  Diploma in computer Engineering,securing 78%,Currently  Student of B.Tech computer Engineering and i like to keep learning and experience new things. I have created some projects, check out my <Link to="/Projects" class="a">Projects</Link></p></div>
            <div className="info1"><p className="tittle1">MERN stact Devloper</p>
            <p>Im a fullstack web devloper who knows Reactjs,ExpressJs,MongoDB,and NodeJs</p></div>
            <div className="info1"><p className="tittle1">Looking for an Opportunity</p>
            <p>Currently im looking for an opportunity to emprove my skill and knowledge by working with profetionals,
                Here is my  <a href={pic} class="a" download>Resume</a> </p></div>
            </div>
            <div className="img-box"><img src={pic2}alt="logo"></img></div>
              </div>
    
            </div>
           
            <h2>Check my <Link to="/Projects" class="links">Projects</Link> </h2>
        </div>
    )
}


export default About;