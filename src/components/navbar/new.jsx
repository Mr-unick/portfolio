import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link, useLocation ,NavLink} from 'react-router-dom';
import "../navbar/nav.css"
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import { useSearchParams } from "react-router-dom";




export default function SwipeableTemporaryDrawer({location}) {
  const [state, setState] = React.useState({
    left: false,
  });








  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List class="menu">
      <ListItem >
            
           <NavLink to="/" className="links">Home</NavLink>
           
          </ListItem>
          <ListItem >
            
            <NavLink to="/Projects" className="links">Projects</NavLink>
           
          </ListItem>
          <ListItem >
          
            <NavLink to="/Skills" className="links">Skills</NavLink>
           
          </ListItem>
          <ListItem >
            
            <NavLink to="/about" className="links">About</NavLink>
            
          </ListItem>
          <ListItem >
            
            <NavLink  to="/Contact" className="links">Contact</NavLink>
           
          </ListItem>
      </List>
    </Box>
  );




  
  
  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} class="menu-btn"><MenuIcon id="icons"/></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
           
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}