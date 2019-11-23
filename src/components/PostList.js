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
                    "imageUrl" : "",
                    "text" : "Worked on spawning environment props into the environment and having them interact with players. "
                }
            },
            "postFive" :
            {
                "date": "10/21",
                "postName" : "",
                "Alex" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : "Worked on game settings menu and pause menu."
                },
                "Fernando" : {
                    "vimeoLink" : "https://vimeo.com/375051599",
                    "imageUrl" : "",
                    "text" : "Added a grenade launcher for regular grenades and holy grenades with its art, SFX  and VFX. I made a MedKit and TraumaKit power up to heal players, did the animation and VFX with particle system. I made trails for all projectiles to make them easier to follow in the air. Implemented turn timer coroutines and states in Game Manager to keep track of turn transitions to allow environment hazards to attack during them."
                },
                "Joseph" : {
                    "vimeoLink" : "",
                    "imageUrl" : "https://i.imgur.com/81To55H.png",
                    "text" : "Worked on AI targeting for the sun and other environment AI."
                }
            },
            "postSix" :
            {
                "date": "10/28",
                "postName" : "",
                "Alex" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : "Worked on weapon inventory, which allows for easier selection of weapons compared to switching with the 'Q' and 'E' keys."
                },
                "Fernando" : {
                    "vimeoLink" : "https://vimeo.com/375052281",
                    "imageUrl" : "",
                    "text" : "Added 4 explosion FX, and SFX for all guns (most sounds were recorded and edited in audacity). Remade the Physics/Animation system on the players to separate them from interfering with each other and give a more realistic behavior."
                },
                "Joseph" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : "Researched and tested movement using Unity A* project. https://arongranberg.com/astar/"
                }
            },
            "postSeven" :
            {
                "date": "11/4",
                "postName" : "",
                "Alex" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : "Created a shotgun that shoots three bullets. Added inventory and pause buttons."
                },
                "Fernando" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : "Started AI state Machine, right now it can identify all alive players and it sorts them by in a list by distance, team health and soldier health. This is with the intention of prioritizing targets. Implemented pausing logic by freezing time and saving the state of the game and restarting all necessary coroutines.Created game cover."
                },
                "Joseph" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : "Created palm tree that launches explosive coconuts that reuse grenade script to cause damage to player. Also created cactus that damages player on collision."
                }
            },
            "postEight" :
            {
                "date": "11/11",
                "postName" : "Veteran's Day",
                "Alex" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : "Created a teleporter grenade weapon that teleports the player to where the grenade lands."
                },
                "Fernando" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : "Created a generic plane bomber prefab and script to allow for reuse. Currently being used as a weapon to drop bombs, and to provide health packs and weapon crates during turn transitions. "
                },
                "Joseph" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : "Worked on creating an environment manager to keep control of which environment attacks during turn transition, and refactored sun code to be controlled by the environment manager."
                }
            },
            "postNine" :
            {
                "date": "11/18",
                "postName" : "Testing Day",
                "Alex" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : "Added player name text and amount of health above players, button tooltips and control option in pause menu."
                },
                "Fernando" : {
                    "vimeoLink" : "",
                    "imageUrl" : "https://i.imgur.com/9UttuTp.png",
                    "text" : "Improved camera management following action and shots. Teams now have a shared arsenal, which limits how much ammo of each weapon each team has. Created weapon crates to randomly give player one ammo for a weapon."
                },
                "Joseph" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : "Preparing for testing day by creating the build, and last minute testing, bugfixing, specifically to a weapon bug that shows up in the build. Started on 'player bush', a gag AI environment hazard that can utilize some weapons. Did not finish in time for testing day."
                }
            },
            "postTen" :
            {
                "date": "11/25",
                "postName" : "Test Iteration",
                "Alex" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : "Completed a game feed that will help update the player on what's going on in the game. Added current team and player turns to in-game UI."
                },
                "Fernando" : {
                    "vimeoLink" : "",
                    "imageUrl" : "https://i.imgur.com/wqffMMQ.jpg",
                    "text" : "BGF-9000 weapon and Infinity gauntlet. Implemented the first tool, moon boots, to increase player mobility. Implemented thunder gun and cartoon gag gun to allow players to skip their turn as requested in survey."
                },
                "Joseph" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : "Added moving platforms to map to allow for better player mobility. Implemented wandering bird that randomly attacks players during turn transitions. Revamping map generation, to generate the map in small chunks to allow for randomness while having the map make sense."
                }
            },
            "postEleven" :
            {
                "date": "12/2",
                "postName" : "Final Adjustments",
                "Alex" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : ""
                },
                "Fernando" : {
                    "vimeoLink" : "",
                    "imageUrl" : "",
                    "text" : "Polishing player AI, including improved projectile aiming, and adding remaining weapons to decision making."
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
                {/* <Post postInfo={posts.postEleven} postNumber={11}/> */}
                <Post postInfo={posts.postTen} postNumber={10}/>
                <Post postInfo={posts.postNine} postNumber={9}/>
                <Post postInfo={posts.postEight} postNumber={8}/>
                <Post postInfo={posts.postSeven} postNumber={7}/>
                <Post postInfo={posts.postSix} postNumber={6}/>
                <Post postInfo={posts.postFive} postNumber={5}/>
                <Post postInfo={posts.postFour} postNumber={4}/>
                <Post postInfo={posts.postThree} postNumber={3}/>
                <Post postInfo={posts.postTwo} postNumber={2}/>
                <Post postInfo={posts.postOne} postNumber={1}/>
            </div>
        );
    }
}

export default PostList;