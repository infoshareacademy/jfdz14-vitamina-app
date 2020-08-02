import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { tileData } from './ChallengeDescription';

const Progress = () => {
     const useStyles = makeStyles((theme) => ({
          root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
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
               <h1 style={{margin: '1%'}}>Wyzwania w trakcie realizacji</h1>
      <GridList cellHeight={180} cols={3} style={{textAlgin: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
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
      <h1 style={{margin: '1%'}}>Wyzwania zakończone</h1>
      <GridList cellHeight={180} cols={3} style={{textAlgin: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
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
        

export default Progress;