import React from 'react';
import '../App.css';
import NavBar from './NavBar';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        margin: '10%'
    },
    img: {
      padding: theme.spacing(1),
    },
  }));


const Assets = () => {
    // @ts-ignore
    const classes = useStyles();
    return (
        <div>
        <NavBar/>
            <div className="Home">
                <div className={classes.root}>
                    <div className="Gray-Background">
                        <Typography variant="h3">Weapons</Typography>
                        <Grid container spacing={1}>
                            <Grid container item xs={12} spacing={3}>
                                <Grid item xs={4}>
                                    <img className="Asset-Imgs" src="https://i.imgur.com/0nCj7Ya.png" alt=""></img>
                                </Grid>
                                <Grid item xs={4}>
                                    <img className="Asset-Imgs"  src="https://i.imgur.com/0fvbYsW.png" alt=""></img>
                                </Grid>
                                <Grid item xs={4}>
                                    <img className="Asset-Imgs" src="https://i.imgur.com/uvMHXkG.png" alt=""></img>
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} spacing={3}>
                                <Grid item xs={4}>
                                    <img className="Asset-Imgs" src="https://i.imgur.com/cNbM6fu.png" alt=""></img>
                                </Grid>
                                <Grid item xs={4}>
                                    <img className="Asset-Imgs" src="https://i.imgur.com/zaEEMvl.png" alt=""></img>
                                </Grid>
                                <Grid item xs={4}>
                                    <img className="Asset-Imgs" src="https://i.imgur.com/kGmXxOI.png" alt=""></img>
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} spacing={3}>
                                <Grid item xs={4}>
                                    <img className="Asset-Imgs" src="https://i.imgur.com/R13vVZ4.png" alt=""></img>
                                </Grid>
                                <Grid item xs={4}>
                                    <img className="Asset-Imgs" src="https://i.imgur.com/oAPghla.png" alt=""></img>
                                </Grid>
                                <Grid item xs={4}>
                                    <img className="Asset-Imgs" src="https://i.imgur.com/6fPsbrt.png" alt=""></img>
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} spacing={3}>
                                <Grid item xs={4}>
                                    <img className="Asset-Imgs" src="https://i.imgur.com/aMv7cP2.png" alt=""></img>
                                </Grid>
                                <Grid item xs={4}>
                                    <img className="Asset-Imgs" src="https://i.imgur.com/3BMT5pY.png" alt=""></img>
                                </Grid>
                                <Grid item xs={4}>
                                    <img className="Asset-Imgs" src="https://i.imgur.com/Kx1nqKR.png" alt=""></img>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                    <div className="Gray-Background">
                        <Typography variant="h3">Environment</Typography>
                        <Grid container spacing={1}>
                            <Grid container item xs={12} spacing={3}>
                                <Grid item xs={4}>
                                    <img className="Asset-Imgs" src="https://i.imgur.com/Ak7RM9R.png" alt=""></img>
                                </Grid>
                                <Grid item xs={4}>
                                    <img className="Asset-Imgs"  src="https://i.imgur.com/bLqaWMA.png" alt=""></img>
                                </Grid>
                                <Grid item xs={4}>
                                    <img className="Asset-Imgs" src="https://i.imgur.com/eT9Tijr.png" alt=""></img>
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} spacing={3}>
                                <Grid item xs={4}>
                                    <img className="Asset-Imgs" src="https://i.imgur.com/ooErwiH.png" alt=""></img>
                                </Grid>
                                <Grid item xs={4}>
                                    <img className="Asset-Imgs" src="https://i.imgur.com/EwXcC3M.png" alt=""></img>
                                </Grid>
                                <Grid item xs={4}>
                                    <img className="Asset-Imgs" src="https://i.imgur.com/lVzRBui.png" alt=""></img>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Assets;