import React from 'react';
import '../App.css';
import { Container, Grid, ExpansionPanel,
    ExpansionPanelActions, ExpansionPanelDetails,
    ExpansionPanelSummary, Typography }
    from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ReactPlayer from 'react-player'
import { styled } from '@material-ui/core/styles';


class Post extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            postNumber : this.props.postNumber,
            alex : this.props.postInfo.Alex,
            fernando : this.props.postInfo.Fernando,
            joseph : this.props.postInfo.Joseph,
            date : this.props.postInfo.date,
            postName : this.props.postInfo.postName
        }
    }

    render() {
        const MyExpansionPanel = styled(ExpansionPanel)({
            alignItems: 'center',
            backgroundColor: 'grey',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'black'
          });

          const HeaderExpansionPanel = styled(ExpansionPanel)({
            alignItems: 'center',
            backgroundColor: 'grey',
            border: 0,
            borderRadius: 3,
            boxShadow: 'none',
            color: 'black'
          });
          
        return (
            
            <div className="Post">
                
                <HeaderExpansionPanel>
                    <Typography variant="h5">
                        Post {this.state.postNumber} {this.state.date} {this.state.postName}
                    </Typography>
                </HeaderExpansionPanel>
                <MyExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <div className="Content">
                        <Typography variant="subtitle1">Alex</Typography>
                    </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div className="Clear">
                            <div className="Content">
                            <Typography>
                                {this.state.alex.text}
                            </Typography>
                            </div>
                            {this.state.alex.imageUrl !== "" &&
                                <div><img className="Media" src={this.state.alex.imageUrl} alt=""></img></div>
                            }
                            
                            {this.state.alex.vimeoLink !== "" &&
                                <div><ReactPlayer className="Media" url={this.state.alex.vimeoLink} /></div>
                            }
                        </div>
                        
                    </ExpansionPanelDetails>
                </MyExpansionPanel>
                <MyExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <div className="Content">
                        <Typography variant="subtitle1">Fernando</Typography>
                    </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <div className="Clear">
                        <div>
                            <Typography>
                                {this.state.fernando.text}
                            </Typography>
                        </div>
                        {this.state.fernando.imageUrl !== "" &&
                            <div><img className="Media" src={this.state.fernando.imageUrl} alt=""></img></div>
                        }
                        
                        {this.state.fernando.vimeoLink !== "" &&
                            <div><ReactPlayer className="Media" url={this.state.fernando.vimeoLink} /></div>
                        }
                    </div>
                    </ExpansionPanelDetails>
                </MyExpansionPanel>
                <MyExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <div className="Content">
                        <Typography variant="subtitle1">Joseph</Typography>
                    </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <div className="Clear">
                        <div>
                            <Typography>
                                {this.state.joseph.text}
                            </Typography>
                        </div>
                        {this.state.joseph.imageUrl !== "" &&
                            <div><img className="Media" src={this.state.joseph.imageUrl} alt=""></img></div>
                        }
                        
                        {this.state.joseph.vimeoLink !== "" &&
                            <div><ReactPlayer className="Media" url={this.state.joseph.vimeoLink} /></div>
                        }
                        </div>
                    </ExpansionPanelDetails>
                </MyExpansionPanel>
            </div>
        );
    }
}

export default Post;