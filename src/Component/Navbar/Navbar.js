import { AppBar, Avatar, Button, Fade, IconButton, Menu, MenuItem, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { deepOrange, deepPurple } from '@mui/material/colors';
import useAuth from './../../hooks/useAuth';
import { Link } from 'react-router-dom';
import "./Navbar.css"


const Navbar = () => {
    const {user,login,logOut}=useAuth()
    const [anchorEl, setAnchorEl] =useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
        <div className="navbar-container" style={{marginBottom:"100px"}}>
           <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
           <Link to="/home">
          <Button color="inherit">Home</Button>
        </Link>
          <Link to="/events">
          <Button color="inherit">Events</Button>
        </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           
         {user.email &&  <div>
            <Link to="login">
            <Button color="inherit">My Orders</Button>
            </Link>
            <Link to="login">
            <Button color="inherit">Manage All Orders</Button>
            </Link>
            <Link to="login">
            <Button color="inherit">Add A New Service</Button>
            </Link>
           </div>}
         
          </Typography>

       { user.email ? <Link to="login">
        <Button color="inherit">Logout</Button>
        </Link>
        :
        <Link to="login">
          <Button color="inherit">Login</Button>
        </Link>}

        { user.email && <Button
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Avatar
        sx={{ bgcolor: deepOrange[500] }}
        alt={user.displayName}
        src={user.photoURL}
      />
      {user.displayName}
      </Button>}

      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={logOut}>Logout</MenuItem>
      </Menu>
        </Toolbar>
      </AppBar>
    </Box> 
        </div>
    );
};

export default Navbar;