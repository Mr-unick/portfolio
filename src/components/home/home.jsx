
import "./home.css"
import img from "../images/two.gif"

import { Navigate,Link, useNavigate, useLocation} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Modal from "../modal/modal";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import 'animate.css';



const Home=({setclose,close})=>{
    const[open,setopen]=useState(false)
    
    const navigate=useNavigate()
   
 
    useEffect(() => {
        
        if(close){
            setopen(false);
        }else(
            
            setTimeout(() => {
                setopen(true);
              }, 1000)
        )
       
      },[]);
    const closemodal =()=>{
        setopen(false);
        setclose(true)
    }
    const closemodel2=()=>{
        setclose(true)
    }
   
    return(
        <div className="home" >
           {open && <Modal closemodal={closemodal} closemodel2={closemodel2}/>}
            <div className="headertext pos animate__animated animate__bounce" >
            <p className="home-tittle">Welcome to my portfolio!</p>
            <p>This is Nikhil ,a MERN stack Devloper</p>
            </div>
            <div className="buttons" animate__animated animate__bounce>
            <button className="home-btn2 hover animate__animated animate__backInLeft" onClick={()=>navigate("/about")}>know more about me  </button>
            <button className="home-btn1 hover animate__animated animate__backInRight" onClick={()=>navigate("/Contact")}>connect with me</button>
            </div>
            <div className="image animate__animated animate__zoomIn" >
            <img src={img} alt="img" ></img>
            </div>
        </div>
    )
}


export default Home;