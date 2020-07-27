import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import ChallengeImage1 from "./image/challenge1.jpg"
import ChallengeImage2 from "./image/challenge2.jpg"
import ChallengeImage3 from "./image/challenge3.jpg"
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    overflow: 'hidden',
  },
  gridList: {
    width: 500,
    height: 450,
  },
  tileStyling: {
    width: 100,
    height: 450,
  }
}));


  // The example data is structured as follows:


  const tileData = [
    {
      img: ChallengeImage1,
      title: 'Spacer dla Twojego umysłu.',
      id: 1
    },
    {
      img: ChallengeImage2,
      title: 'Wyśnij sobie spokój.',
      id: 2
    },
    {
      img: ChallengeImage3,
      title: 'Pij wodę, będziesz wielki.',
      id: 3
    },
  ]

    export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} cols={3}>
        {tileData.map((tile) => (
            <GridListTile key={tile.img} className={classes.tileStyling}>
                        
              <img src={tile.img} alt={tile.title} />
              <Link to={`challenges/${tile.id}`}>
              <GridListTileBar
                title={tile.title}
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