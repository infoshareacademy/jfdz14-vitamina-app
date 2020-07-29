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
import clsx from 'clsx';
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';




  // The example data is structured as follows:


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
      category: catName[3]
    },
    {
      img: ChallengeImage3,
      title: 'Pij wodę, będziesz wielki.',
      id: 4,
      category: catName[0]
    },
    {
      img: ChallengeImage3,
      title: 'Pij wodę, będziesz wielki.',
      id: 5,
      category: catName[2]
    },
    {
      img: ChallengeImage3,
      title: 'Pij wodę, będziesz wielki.',
      id: 6,
      category: catName[0]
    },
    {
      img: ChallengeImage3,
      title: 'Pij wodę, będziesz wielki.',
      id: 7,
      category: catName[1]
    },
    {
      img: ChallengeImage3,
      title: 'Pij wodę, będziesz wielki.',
      id: 8,
      category: catName[2]
    },
    {
      img: ChallengeImage3,
      title: 'Pij wodę, będziesz wielki.',
      id: 9,
      category: catName[3]
    },
    {
      img: ChallengeImage3,
      title: 'Pij wodę, będziesz wielki.',
      id: 0,
      category: catName[1]
    },
  ]

    export default function TitlebarGridList() {

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



  return (

/*
classes={{tile: classes.boxShadow}} 
*/

    <div className={classes.root}>
      <GridList cellHeight={180} cols={3}>
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