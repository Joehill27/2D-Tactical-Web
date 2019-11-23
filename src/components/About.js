import React from 'react';
import '../App.css';
import NavBar from './NavBar';
import { Typography } from '@material-ui/core';


const About = () => {
    return (
        <div>
            <NavBar/>
            <div className="Home">
                <div className="About">
                    <Typography variant="h5">
                        About
                    </Typography>
                    <div className="Paragraph">
                        <Typography variant="subtitle1">
                            What is Squires: Knights in the Making?
                        </Typography>
                        <Typography variant="body2">
                            2D turn-based tactical shooter inspired by games like Worms, Shellshock Live, and Wild Ones. Built with Unity version 2019.3.0a2 in 2D. The three creators, Alex, Fernando, and Joseph, created this game as a semester long school project. To learn more, visit the home page for blog posts on progress updates, look at the source code on github, or play the game online! We tried to make the game as fun as possible, with references to pop culture. We do not own any of the assets on this website or used in the game, we just made the game for entertainment value. Have fun playing!
                        </Typography>
                    </div>
                    <div className="Paragraph">
                        <Typography variant="subtitle1">
                            How does the game work?
                        </Typography>
                        <Typography variant="body2">
                            2 or more teams comprising of 2 or more players are randomly spawned on a randomly generated map. Each team can be chosen to be entirely made of AI players or controlled by a human player. A player from each team will take a turn until all teams have gone once, then the next player on each team will take their turn. This procedure is followed until there is one team left, or the maximum time is reached. If a time limit is set, then the team with the highest total health is the winner.
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;