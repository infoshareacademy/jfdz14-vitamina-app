import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { tileData } from './ChallengeDescription';

const Settings = (props) => {
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
               <h1>Wyzwania w trakcie</h1>
      <GridList cellHeight={180} cols={3}>
        {props.challanges.map(challange => {
                        if(challengeList.includes(`InProgress${challange.id}`)){
                            return (
            <GridListTile key={challange.id} className={classes.tileStyling, classes.boxShadow}>  

              <img src={challange.img} alt={challange.title}/>
              <Link to={`challenges/${challange.id}`}>
              <GridListTileBar
                title={challange.title}
                subtitle={<span>{challange.category}</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${challange.title}`} className={classes.icon}>
                  </IconButton>
                }
              />
               </Link>
            </GridListTile>
        ) } })}
      </GridList>
      <h1>Wyzwania zrobione!</h1>
      <GridList cellHeight={180} cols={3}>
        {props.challanges.map(challange => {
          if(challengeList.includes(`Finished${challange.id}`)){
            return (
              <GridListTile key={challange.id} className={classes.tileStyling, classes.boxShadow}>  

                <img src={challange.img} alt={challange.title}/>
                <Link to={`challenges/${challange.id}`}>
                <GridListTileBar
                  title={challange.title}
                  subtitle={<span>{challange.category}</span>}
                  actionIcon={
                    <IconButton aria-label={`info about ${challange.title}`} className={classes.icon}>
                    </IconButton>
                  }
                />
                </Link>
              </GridListTile>
            )
          }
        })}
      </GridList>
    </div>
          )
   
};

export default Settings;