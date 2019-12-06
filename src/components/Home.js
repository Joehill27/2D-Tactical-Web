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
                <Button onClick={() => {window.open("https://drive.google.com/file/d/1zdcCvcNJ6-440Mj7WOq_QikVX87azmNl/view?usp=sharing")}}>
                    Link to Game Proposal Presentation
                </Button>
            </div>
        );
    }
}

export default Home;