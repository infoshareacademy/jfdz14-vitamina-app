import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { tileData } from './ChallengesList';

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
          challengeList.push(localStorage.key(i));
        }

     return (

          <div className={classes.root}>
               <h1>Wyzwania w trakcie</h1>
      <GridList cellHeight={180} cols={3}>
        {tileData.map(tile => {
                        if(challengeList.includes(`InProgress${tile.id}`)){
                            return (
            <GridListTile key={tile.id} className={classes.tileStyling, classes.boxShadow}>  
            
                 
  

              <img src={tile.img} alt={tile.title}/>
              <Link to={`challenges/${tile.id}`}>
              <GridListTileBar
                title={tile.title}
                subtitle={<span>{tile.category}</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  </IconButton>
                }
              />
               </Link>
            </GridListTile>
        ) } })}
      </GridList>
      <h1>Wyzwania zrobione!</h1>
      <GridList cellHeight={180} cols={3}>
        {tileData.map(tile => {
                        if(challengeList.includes(`Finished${tile.id}`)){
                            return (
            <GridListTile key={tile.id} className={classes.tileStyling, classes.boxShadow}>  
            
                 
  

              <img src={tile.img} alt={tile.title}/>
              <Link to={`challenges/${tile.id}`}>
              <GridListTileBar
                title={tile.title}
                subtitle={<span>{tile.category}</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  </IconButton>
                }
              />
               </Link>
            </GridListTile>
        ) } })}
      </GridList>
    </div>
          )
   
};

export default Settings;


/*
 <>
  <>
          <ul>
          {
                    tileData.map(tile => {
                        if(inProgressList.includes(`InProgress${tile.id}`)){
                            return (
                              <span>{tile.title}</span>
                            )
                        }
                    
                    })
                }
          </ul>            
          </>
          <ul>
          {
                    tileData.map(tile => {
                        if(inProgressList.includes(`InProgress${tile.id}`)){
                            return (
                              <span>{tile.title}</span>
                            )
                        }
                    
                    })
                }
          </ul>            
          </>

let progressList = [{}]
const getProgressList = JSON.parse(localStorage.getItem('InProgress'))
for (let i = 0; i < getProgressList.length; i++ ) {
     let x = getProgressList[i]
     progressList[i] = JSON.parse(localStorage.getItem('progressItem' + [x]) || '')
let progressList = []
const getProgressList = JSON.parse(localStorage.getItem('InProgress') || '0')
for (let i = 0; i < getProgressList.length; i++ ) {
     let x = getProgressList[i]
     progressList[i] = JSON.parse(localStorage.getItem('progressItem' + [x]) || '')

}

const Progress = Object.keys(progressList[0])
*/