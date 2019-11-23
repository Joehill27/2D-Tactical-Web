import React from 'react';
import '../App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import { styled } from '@material-ui/core/styles';
import logo from '../img/Icon.svg';
import { useHistory } from "react-router-dom";

const MyToolbar = styled(Toolbar)({
        alignItems: 'center',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      });

export default function NavBar() {
    let history = useHistory();
    return (
        <div className="NavBar">
            <AppBar position="static">
                <MyToolbar>
                    <img 
                        src={logo}
                        alt={logo}
                        className="NavLogo"
                    />
                    
                    <Button onClick={() => {history.push(process.env.PUBLIC_URL + "/")}}> <h3 className="Header">Home</h3> </Button>
                    <Button onClick={() => {history.push(process.env.PUBLIC_URL + "/About")}}> <h3 className="Header">About</h3> </Button>
                    <Button onClick={() => {history.push(process.env.PUBLIC_URL + "/Assets")}}> <h3 className="Header">Assets</h3> </Button>
                    {/* <Button onClick={() => {history.push('/Squires-Knights-In-the-Making/Play')}}> Play </Button> */}
                    {/* <Button onClick={() => {history.push('/Squires-Knights-In-the-Making/Download')}}> Download </Button> */}
                    <Typography className="Header" variant ="h5">
                        Squires: Knights in the Making
                    </Typography>
                </MyToolbar>
            </AppBar>
        </div>
    );
}

