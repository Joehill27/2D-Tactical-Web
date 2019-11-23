import React from 'react';
import '../App.css';
import NavBar from './NavBar';
import PostList from './PostList';

class Home extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
                <PostList/>
            </div>
        );
    }
}

export default Home;