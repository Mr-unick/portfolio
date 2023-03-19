



import ReactDOM from 'react-dom';
import { createPortal } from "react-dom";
import "./modal.css"
import { Navigate,Link, useNavigate} from 'react-router-dom';

const Modal =({closemodal})=>{
    const navigate=useNavigate()
    return ReactDOM.createPortal(<div className="modal" id="modal">
        <div className="modal-cont" >
            <h1 id="tittle1" className="contact-tittle ">Hi, Check out my other projects</h1>
<h3 >Have a look at my other projects</h3>
<p>I have created some other amazing projects, check out these projects.</p>
<p>You may like that projects too.</p>
<div className="buttns" onClick={closemodal}>
<button onClick={()=>navigate("/Projects")} className="btn-pro btns" >Check Projects</button>
        <button onClick={closemodal} className="btn-close btns">close</button>
</div>
       </div>

    </div>,
     document.getElementById('modal')
      );
}


export default Modal;