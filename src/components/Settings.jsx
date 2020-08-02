import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { tileData } from './ChallengeDescription';

const Settings = () => {
     const useStyles = makeStyles((theme) => ({
          root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            overflow: 'hidden'
          },
  
          gridList: {
            width: 500,
            height: 450,
          },
          tileStyling: {
            width: 100,
            height: 450,
            
  
          },
          boxShadow:{
            boxShadow: '3px 3px 5px #aaaaaa',
            margin: '5px',
            padding: '0 !important'
          }
  
        }));
        const classes = useStyles();
        
        
       let challengeList = [];
        for(let i = 0; i < localStorage.length; i++){
          let key = localStorage.key(i);
          challengeList.push(key); 
        }

     return (

          <div className={classes.root}>
               <h1>Ustawienia</h1>
      
    </div>
          )
   
};

export default Settings;