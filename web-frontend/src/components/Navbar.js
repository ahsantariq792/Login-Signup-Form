import React from "react";
import '../App.css'
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {


    return (
        <>
            {/* <div>
                <nav>
                    <ul>
                        <li>
                            <Link className="item" exact to="/">Signup</Link>
                        </li>
                        <li>
                            <Link className="item" to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
            </div> */}

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
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
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            React Form
                        </Typography>
                        <Link className="item" exact to="/"><Button color="inherit">Signup</Button></Link>
                        <Link className="item" to="/login"><Button color="inherit">Login</Button></Link>
                    </Toolbar>
                </AppBar>
            </Box>


        </>
    );

}
export default Navbar;