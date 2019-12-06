import React from 'react';
import '../App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import logo from '../img/Icon.svg';
import { useHistory } from "react-router-dom";
import { Tooltip } from '@material-ui/core';

const MyToolbar = styled(Toolbar)({
        alignItems: 'center',
        backgroundColor: 'grey',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 72,
        padding: '0 30px',
      });

export default function NavBar() {
    let history = useHistory();
    return (
        <div className="NavBar">
            <AppBar position="static">
                <MyToolbar>
                    <Tooltip title="Go Knights!">
                        <img 
                            src={logo}
                            alt={logo}
                            className="NavLogo"
                        />
                    </Tooltip>
                    
                    <Tooltip title="Go to Home Page">
                        <Button onClick={() => {history.push(process.env.PUBLIC_URL + "/")}}> <span className="Header">Squires: Knights in the Making</span> </Button>
                    </Tooltip>
                    <Tooltip title="Learn More">
                        <Button onClick={() => {history.push(process.env.PUBLIC_URL + "/About")}}> <span className="Header">About</span> </Button>
                    </Tooltip>
                    <Tooltip title="Game Assets">
                        <Button onClick={() => {history.push(process.env.PUBLIC_URL + "/Assets")}}> <span className="Header">Assets</span> </Button>
                    </Tooltip>
                    <Tooltip title="Source Code">
                        <Button onClick={() => {window.open("https://github.com/trevinofernando/2D-Tactical-Game")}}> <span className="Header">GitHub</span> </Button>
                    </Tooltip>
                    {/* <Tooltip title="Download Page">
                        <Button onClick={() => {history.push(process.env.PUBLIC_URL + "/Download")}}> <span className="Header">Download</span> </Button>
                    </Tooltip> */}
                    <Tooltip title="Play on the Web">
                    <Button onClick={() => {window.open(process.env.PUBLIC_URL + "/Play.html")}}> <span className="Header">Play Now</span> </Button>

                    </Tooltip>
                    
                </MyToolbar>
            </AppBar>
        </div>
    );
}

