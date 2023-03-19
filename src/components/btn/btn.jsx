


import "./btn.css"


import { Navigate,Link, useNavigate} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';





const Btn=()=>{
    const navigate=useNavigate()
    
    return(
<div className="btn"><button className="home-button-box"onClick={()=>navigate("/")} >  <HomeIcon id="home-button" /></button>
        
        </div>
            
    )
}


export default Btn;