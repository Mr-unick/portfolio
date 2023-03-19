






import "../skills/skills.css"
import react from "../images/portfolio.png"
import reac from "./icons/rec.svg"
import mui from "./icons/ui.svg"
import py from "./icons/py.svg"
import html from "./icons/html.svg"
import js from "./icons/js.svg"
import css from "./icons/css.svg"
import java from "./icons/java.svg"
import cpp from "./icons/cpp.svg"
import node from "./icons/no.svg"
import mongo from "./icons/mon.svg"
import ex from "./icons/exx.svg"
import c from "./icons/cc.svg"
import redux from "./icons/redux.svg"






const Skills=()=>{

    return(
        <div className="Skills">
            <div className="headertexts headertext2">
            <p className="contact-tittle">My Skills</p>
            <p className="tittle2">Passionate about new technologies, I keep exploring stuffs. Here are tech stack I've worked with!</p>
            </div>
           
        <div className="box1">
        <div className="lang">
            <img src={html} alt="logo"  className="lang-img"/>
             <p className="lang-tittle">Html</p>
        </div>
        <div className="lang">
            <img src={css} alt="logo"  className="lang-img"/>
             <p className="lang-tittle">Css</p>
        </div>
        <div className="lang">
            <img src={js} alt="logo"  className="lang-img"/>
             <p className="lang-tittle">Javascript</p>
        </div>
        <div className="lang">
            <img src={reac} alt="logo"  className="lang-img"/>
             <p className="lang-tittle">ReactJs</p>
        </div>
        <div className="lang">
            <img src={node} alt="logo"  className="lang-img"/>
             <p className="lang-tittle">NodeJs</p>
        </div>
        <div className="lang">
            <img src={ex} alt="logo"  className="lang-img"/>
             <p className="lang-tittle">ExpressJs</p>
        </div>
        <div className="lang">
            <img src={mongo} alt="logo"  className="lang-img"/>
             <p className="lang-tittle">MongoDB</p>
        </div>
        <div className="lang">
            <img src={redux} alt="logo"  className="lang-img"/>
             <p className="lang-tittle">Redux</p>
        </div>
        <div className="lang">
            <img src={mui} alt="logo"  className="lang-img"/>
             <p className="lang-tittle">Materil Ui</p>
        </div>
        <div className="lang">
            <img src={py} alt="logo"  className="lang-img"/>
             <p className="lang-tittle">Python</p>
        </div>
        <div className="lang">
            <img src={java} alt="logo"  className="lang-img"/>
             <p className="lang-tittle">java</p>
        </div>
        <div className="lang">
            <img src={cpp} alt="logo"  className="lang-img"/>
             <p className="lang-tittle">C++</p>
        </div>
        <div className="lang">
            <img src={c} alt="logo"  className="lang-img"/>
             <p className="lang-tittle">c</p>
        </div>
        </div>
        </div>
    )
}


export default Skills;