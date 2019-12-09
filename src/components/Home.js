import React from 'react';
import '../App.css';
import NavBar from './NavBar';
import PostList from './PostList';
import { Button } from '@material-ui/core';

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <NavBar/>
                
                
                <PostList/>
                <div className="Container">
                     <div className="Padding">
                        <Button variant="contained" color="primary" onClick={() => {window.open("https://drive.google.com/file/d/1zdcCvcNJ6-440Mj7WOq_QikVX87azmNl/view?usp=sharing")}}>
                            Link to Game Proposal Presentation
                        </Button>
                    </div>
                    
                    <div>
                        <Button variant="contained" color="primary" onClick={() => {window.open("https://drive.google.com/file/d/1zdcCvcNJ6-440Mj7WOq_QikVX87azmNl/view?usp=sharing")}}>
                            Link to First Playable Presentation
                        </Button>
                    </div>
                    
                    <div>
                        <Button variant="contained" color="primary" onClick={() => {window.open("https://drive.google.com/file/d/1zdcCvcNJ6-440Mj7WOq_QikVX87azmNl/view?usp=sharing")}}>
                            Link to AI Presentation
                        </Button> 
                    </div>
                </div>
                
                
            </div>
        );
    }
}

export default Home;