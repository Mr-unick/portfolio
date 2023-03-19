

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./projects.css"
import nameit from "../images/name.png"
import flash from "../images/flash.png"
import port from "../images/portfolio.png"
import crypto from "../images/crypto.png"
import 'animate.css';
const Projects=()=>{
   





  
    return(
        <div className="projects-container">
          <div className="headertexts">
            <p className="contact-tittle">My Projects</p>
            <p>Here are some few cool things I've worked on, do check them out!</p>
          </div>
        <div className="projects">
        <Card sx={{ maxWidth: 345 }} class="card ">
      <CardMedia
        sx={{ height: 140 }}
        image={nameit}
        class="card-img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Name-it!
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Do you find it difficult to name your projects or ventures? Fear not! Check out this cool name suggestion application which will help you find the best name for your next project, venture, or startup. Keep building!
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" className="btns">Know More</Button>
        <Button size="small" className="btns"><a href="https://mr-unick.github.io/name-it/">check project </a></Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }} class="card">
      <CardMedia
        sx={{ height: 140 }}
        image={flash}
        class="card-img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Flash-Type
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Having a good typing speed will always help you as a developer! Here, I present you the typing speed test application, where you can check your typing speed (in wpm) and share the results with your friends too.
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" className="btns">Know More</Button>
        <Button size="small" className="btns"><a href="https://mr-unick.github.io/flash-type/">check project </a></Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }} class="card">
      <CardMedia
        sx={{ height: 140 }}
        image={crypto}
        class="card-img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Crypto Tracker
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This project made with html and javascript,by this project user can know realtime value of crypto currency.also we can know marketcap ,total supply,realtime change in price of cypto currency.
 </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className="btns">Know More</Button>
        <Button size="small" className="btns"><a href="https://mr-unick.github.io/crypto/">check project </a></Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }} class="card">
      <CardMedia
        sx={{ height: 140 }}
        image={port}
        class="card-img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Portfolio Website
        </Typography>
        <Typography variant="body2" color="text.secondary">
        As a developer/designer, one should definitely have his/her own portfolio website. There are endless benefits. This is my personal portfolio website that I created using React. </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className="btns">Know More</Button>
        <Button size="small" className="btns">Check project</Button>
      </CardActions>
    </Card>
    
        </div>
      </div>
    )
}


export default Projects;