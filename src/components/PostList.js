import React from 'react';
import '../App.css';
import Post from './Post';
import {Grid} from '@material-ui/core';

class PostList extends React.Component {

    
    render() {

        let posts = {
            "postOne" :
            {
                "date": "9/23",
                "postName" : "Game Proposal",
                "Fernando" : {
                    "vimeoLink" : "https://vimeo.com/361882467",
                    "imageUrl" : "",
                    "text" : "Worked on player movement, player spawning, and some of the collisions, destructable environment, and health system so far. Here is what the game looks like so far:"
                },
                "Alex" : {
                    "vimeoLink" : "",
                    "imageUrl" : "https://i.imgur.com/narV49C.png",
                    "text" : "Alex has been watching tutorials on Unity to become familiar with it. He has worked on some of the basic menus and researched some of the AI movement to get ideas. Here is the state of the menus:"
                },
                "Joseph" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : "Joseph has worked on creating tile assets and some environment assets, and trying out ideas for dynamic map generation, as well as a script for audio management. "
                }
            },
            "postTwo" :
            {
                "date": "9/30",
                "postName" : "Progress",
                "Alex" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : "Most of the menu is finalized in its appearance and function, and the settings reflect with the game. This was done using TextMeshPro package for Unity. To connect the start menu scene and the game scene, Alex wrote a Game Options Menu script that accessed a global variables script and allowed the game scene to create objects based on the options chose in the menu."
                },
                "Fernando" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : "Created a script using singletons that keeps global variables that are persistent throughout scenes and carry information from the menu settings to the game scene. Also implemented turns using co-routines and successfully build a state machine to managed the different states of the game. From spawning players with the color, initial health, size of team and all specifications from the global variables coming from the settings menu, to allowing one shot per turn and terminating the turn after shooting. Created 2 clocks, one for the game and one for using during each turn and turn transitions. Finally, updated some scripts to reflect the new system."
                },
                "Joseph" : {
                    "vimeoLink" : "",
                    "imageUrl" : "https://i.imgur.com/AnP2cgf.png",
                    "text" : "Dynamic map generation has been implemented at a basic state, but isn’t perfect and somethings have to be worked out. In the future the map objects like environment adversaries, and tile sprites will be added based on the map theme and number of players in the game to change the size. There is a few types of platform types that are randomly generated in different sizes, working from left to right, and increasing in height. Random.Range that is built into Unity is used to generate a random number range that corresponds to one of the block types. The block types are flat platforms, layered platforms, stairs, pyramids, single blocks, and empty space."
                }
            },
            "postThree" :
            {
                "date": "10/7",
                "postName" : "First Playable Progress",
                "Alex" : {
                    "vimeoLink" : "",
                    "imageUrl" : "https://i.imgur.com/MjQz8Oz.png",
                    "text" : "Tied together the pre-game options menu scene to the in-game scene. Spawns the correct number of players and the correct number teams, and successfully passes all the settings value to a global variable script."
                },
                "Fernando" : {
                    "vimeoLink" : "https://vimeo.com/364517893",
                    "imageUrl" : "",
                    "text" : "Implemented a Camera Controller that follows the mouse when it goes off screen, and starts a timer to reset the camera back to the player if the mouse is outside of the game screen. The camera can zoom in and out, or scroll horizontally and vertically. The Camera follows locks onto a player when it becomes their turn."
                },
                "Joseph" : {
                    "vimeoLink" : "",
                    "imageUrl" : "https://i.imgur.com/SakYyaC.png",
                    "text" : "Implemented an Audio Manager script that uses the Singleton design pattern to only have one between the menu and game scenes. Can be called from any script since it is public so various scripts can call it."
                }
            },
            "postFour" :
            {
                "date": "10/14",
                "postName" : "Further Progress",
                "Alex" : {
                    "vimeoLink" : "",
                    "imageUrl" : "https://i.imgur.com/GZGsiAH.png",
                    "text" : "Worked on integrating some game clock and other in-game user interfaces that we will need in the future, like the pause menu."
                },
                "Fernando" : {
                    "vimeoLink" : "",
                    "imageUrl" : "https://i.imgur.com/Q03gOxF.jpg",
                    "text" : "Made a Sniper that shoots with Raycast and draws a line as VFX. Made a Homing Bazooka that targets a location after some time of being shot, then it starts turning toward the target using the Cross product to know where and by how much to turn, for the art I recolored the bazooka in GIMP. I Added a Game Over screen that shows the winners team name with the color of that team, and the ability to restart the game. Added a water barrier that does infinite damage to drown any player that touches it. Added a Sun that have a chance of shooting players during turn transitions."
                },
                "Joseph" : {
                    "vimeoLink" : "",
                    "imageUrl" : "https://i.imgur.com/81To55H.png",
                    "text" : "Worked on spawning environment props into the environment and having them interact with players. Coconuts act similar to grenades. Worked on AI targeting for the sun and other environment AI, which didn’t get integrated in time for first playable."
                }
            },
            "postFive" :
            {
                "date": "10/21",
                "postName" : "",
                "Alex" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : ""
                },
                "Fernando" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : ""
                },
                "Joseph" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : ""
                }
            },
            "postSix" :
            {
                "date": "10/28",
                "postName" : "",
                "Alex" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : ""
                },
                "Fernando" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : ""
                },
                "Joseph" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : ""
                }
            },
            "postSeven" :
            {
                "date": "11/4",
                "postName" : "",
                "Alex" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : ""
                },
                "Fernando" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : ""
                },
                "Joseph" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : ""
                }
            },
            "postEight" :
            {
                "date": "11/11",
                "postName" : "",
                "Alex" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : ""
                },
                "Fernando" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : ""
                },
                "Joseph" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : ""
                }
            },
            "postNine" :
            {
                "date": "11/18",
                "postName" : "",
                "Alex" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : ""
                },
                "Fernando" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : ""
                },
                "Joseph" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : ""
                }
            },
            "postTen" :
            {
                "date": "11/25",
                "postName" : "",
                "Alex" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : ""
                },
                "Fernando" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : ""
                },
                "Joseph" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : ""
                }
            },
            "postEleven" :
            {
                "date": "12/2",
                "postName" : "",
                "Alex" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : ""
                },
                "Fernando" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : ""
                },
                "Joseph" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : ""
                }
            }
        }

        return (
            <div>
                <Post postInfo={posts.postFour} postNumber={4}/>
                <Post postInfo={posts.postThree} postNumber={3}/>
                <Post postInfo={posts.postTwo} postNumber={2}/>
                <Post postInfo={posts.postOne} postNumber={1}/>
            </div>
        );
    }
}

export default PostList;