import React from 'react';
import '../App.css';
import { Container, Grid, ExpansionPanel,
    ExpansionPanelActions, ExpansionPanelDetails,
    ExpansionPanelSummary, Typography }
    from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ReactPlayer from 'react-player'
import { throws } from 'assert';
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
            background: 'linear-gradient(10deg, #FE6B8B 50%, #FF8E53 75%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
          });
          
        return (
            
            <div className="Post">
    <Typography variant="h5">Post {this.state.postNumber} {this.state.date} {this.state.postName}</Typography>
                <MyExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <div className="PostPara">
                        <Typography>Alex</Typography>
                    </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div className="PostPara">
                            <Typography>
                                {this.state.alex.text}
                            </Typography>
                        </div>
                        {this.state.alex.imageUrl !== "" &&
                            <div><img className="Img" src={this.state.alex.imageUrl} alt=""></img></div>
                        }
                        
                        {this.state.alex.vimeoLink !== "" &&
                            <div><ReactPlayer url={this.state.alex.vimeoLink} /></div>
                        }
                    </ExpansionPanelDetails>
                </MyExpansionPanel>
                <MyExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <div className="PostPara">
                        <Typography>Fernando</Typography>
                    </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div>
                            <Typography>
                                {this.state.fernando.text}
                            </Typography>
                        </div>
                        {this.state.fernando.imageUrl !== "" &&
                            <div><img className="Img" src={this.state.fernando.imageUrl} alt=""></img></div>
                        }
                        
                        {this.state.fernando.vimeoLink !== "" &&
                            <div><ReactPlayer url={this.state.fernando.vimeoLink} /></div>
                        }
                    </ExpansionPanelDetails>
                </MyExpansionPanel>
                <MyExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <div className="PostPara">
                        <Typography>Joseph</Typography>
                    </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div>
                            <Typography>
                                {this.state.joseph.text}
                            </Typography>
                        </div>
                        {this.state.joseph.imageUrl !== "" &&
                            <div><img className="Img" src={this.state.joseph.imageUrl} alt=""></img></div>
                        }
                        
                        {this.state.joseph.vimeoLink !== "" &&
                            <div><ReactPlayer url={this.state.joseph.vimeoLink} /></div>
                        }
                    </ExpansionPanelDetails>
                </MyExpansionPanel>
            </div>
        );
    }
}

export default Post;