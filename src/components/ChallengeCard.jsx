import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import ChallengeImage1 from "./image/challenge1.jpg";
import ChallengeImage2 from "./image/challenge2.jpg";
import ChallengeImage3 from "./image/challenge3.jpg";
import ChallengeImage4 from "./image/challenge4.jpg";
import ChallengeImage5 from "./image/challenge5.jpg";
import ChallengeImage6 from "./image/challenge6.jpg";
import ChallengeImage7 from "./image/challenge7.jpg";
import ChallengeImage8 from "./image/challenge8.jpg";
import ChallengeImage9 from "./image/challenge9.jpg";
import ChallengeImage10 from "./image/challenge10.jpg";

import clsx from 'clsx';
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';

  const catName = [
   "Sylwetka", "Witalność", "Zwyczaje", "Dieta"
  ]

  const tileData = [
    {
      img: ChallengeImage1,
      title: 'Spacer dla Twojego umysłu.',
      id: 1,
      category: catName[1]
    },
    {
      img: ChallengeImage2,
      title: 'Wyśnij sobie spokój.',
      id: 2,
      category: catName[2]
    },
    {
      img: ChallengeImage3,
      title: 'Pij wodę, będziesz wielki.',
      id: 3,
      category: catName[2]
    },
    {
      img: ChallengeImage5,
      title: 'Ulepsz swoją dietę.',
      id: 4,
      category: catName[3]
    },
    {
      img: ChallengeImage6,
      title: 'Rozciągnij się.',
      id: 5,
      category: catName[1]
    },
    {
      img: ChallengeImage4,
      title: 'Uśmiechnij się.',
      id: 6,
      category: catName[2]
    },
    {
      img: ChallengeImage7,
      title: 'Czas na ćwiczenia.',
      id: 7,
      category: catName[0]
    },
    {
      img: ChallengeImage8,
      title: 'Skup się na swoim wnętrzu.',
      id: 8,
      category: catName[1]
    },
    {
      img: ChallengeImage9,
      title: 'Czas na hobby.',
      id: 9,
      category: catName[2]
    },
    {
      img: ChallengeImage10,
      title: 'Chwila dla relaksu.',
      id: 10,
      category: catName[2]
    }
  ]

    export default function TitlebarGridList() {

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



  return (

/*
classes={{tile: classes.boxShadow}} 
*/

    <div className={classes.root}>
       <h1 style={{margin: '1%'}}>Twoje wyzwania na dziś</h1>
      <GridList cellHeight={180} cols={3} style={{textAlgin: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        {tileData.map((tile) => (
            <GridListTile  key={tile.img} className={classes.tileStyling, classes.boxShadow}>  
            
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
        ))}
      </GridList>
    </div>
  );
}