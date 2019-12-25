import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

const styles = {
    Typography: {
      lineHeight:'1.8em',
      color:'#333',
      fontSize:'20px',
      letterSpacing:0
    },
};
const Item = (props) => {
    const item ={
        borderLeft: '5px solid',
        paddingBottom: '2em',
        position: 'relative',
        borderColor: '#264e59'
    }
    const descriptionItem ={
        marginTop:'40px',
    }
    const targetBorder = {
        position: 'relative',
        left: '-38px',
        top: '-15px',
        width: '40px',
        height: '40px',
        border: '15px solid white',
        borderRadius: '50%',
        zIndex: '1',
        backgroundColor:'#264e59'
    }
    const targetDot ={
        width: '10px',
        height: '10px',
        borderRadius:'50%',
        zIndex: '10',
        margin: '5px auto',
        border: '10px solid white',
        backgroundColor:'#264e59'
    }
    const itemCompanyTitle = {
        color:'#333',
    }
    const itemPositionTitle = {
        color:'#888',
        marginTop: '7px',
        marginLeft:'15px',
        fontSize: '20px'
    }
    const itemDate = {
        position: 'relative',
        right: '765px',
        top: '-60px',
        textAlign: 'right',
        minWidth: '180px',
        color: '#888',
        fontSize: '1em'
    }
    const itemPositionRole = {
        position: 'absolute',
        left: '58px',
        top: '53px',
        textAlign: 'left',
        minWidth: '180px',
        color: '#888',
        fontSize: '1em'
    }
    const itemDescription = {
        marginLeft:'30px',
    }
    const {classes} = props;

    return (<div style={item}>  
            <Grid container style={descriptionItem}>
                <Grid item xs={1}>
                    <div style={targetBorder}>
                        <div style={targetDot}>                                        
                        </div>
                    </div>
                </Grid>
                <Grid item xs={8} style={{display:'flex'}}>
                    <Typography variant='h4' style={itemCompanyTitle}>
                        Zaavia 
                    </Typography>
                    <Typography  style={itemPositionTitle}>
                        Jr. Software Developer
                    </Typography>
                </Grid>
            </Grid>
            <div style={itemPositionRole}>
                JavaScript (ES6), Less, React, Redux, Closure Templates, QUnit
            </div>
            <div style={itemDate}>
                June 2019 - current
            </div>
            <div style={itemDescription}>
                <ul style={{margin:'unset'}}>
                    <li>
                        <Typography classes={{ root: classes.Typography }}> 
                            Grew a team from four to eight developers (a mix of front and backend developers)
                        </Typography>   
                    </li>
                    <li>
                        <Typography classes={{ root: classes.Typography }}> 
                            Grew a team from four to eight developers (a mix of front and backend developers)
                        </Typography>   
                    </li>
                    <li>
                        <Typography classes={{ root: classes.Typography }}> 
                            Grew a team from four to eight developers (a mix of front and backend developers)
                        </Typography>   
                    </li>
                </ul>
            </div>
            </div>
           );
}
 
export default withStyles(styles)(Item);