

import "./contact.css"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact=()=>{
    return(
        <div className="contact">
       <div className="headertexts"> <p className="contact-tittle">    Get in touch</p>
        <p className="tittle3">Interested to collaborate? Drop me an email.</p></div>
             
            <form
    action="https://formspree.io/f/mvonqyyn"
    method="POST"
    className="form">
  
  
  
          <div  class="input1"><TextField id="outlined-basic" label="Email" variant="outlined" type="text" name="email" /></div>
          <div  className="input1"><TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            defaultValue="message"
            name="message"
           
          /></div>
    <Button type="submit" variant="contained" id="submit">Send</Button>
    
  </form>

  <div className="socials">
  <li className="iconss"><a href="https://www.instagram.com/mr_unick_/"><InstagramIcon id="social"/></a></li>
     <li className="iconss"><a href="https://github.com/Mr-unick">< GitHubIcon id="social"/></a></li>
     <li className="iconss"><a href="https://www.linkedin.com/in/nikhil-lende-148687244">< LinkedInIcon id="social"/></a></li>
  </div>
           </div>
             
          
    )
}


export default Contact;