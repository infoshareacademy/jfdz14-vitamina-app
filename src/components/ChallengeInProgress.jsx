import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { tileData } from './ChallengeDescription';
import trophy from './image/trophy.png';
import { useHistory } from 'react-router-dom';

const ChallengeInProgress = () => {
  const useStyles = makeStyles((theme) => ({   
    gridList: {
      height: 450,
    },
    tileStyling: {
      width: 100,
      height: 450,
      padding: '10px',
    },
    tileStyle: {
      borderRadius: '8px',
      boxShadow: 'rgba(39, 39, 39, 0.2) 2px 2px 4px'
    }
  
        }));
        const classes = useStyles();
        const history = useHistory();

        
       let challengeList = [];
        for(let i = 0; i < localStorage.length; i++){
          let key = localStorage.key(i);
          challengeList.push(key); 
        }
        const inprogress = challengeList.filter(function (v) { return /InProgress/.test(v)});
        
        function goToChallangesList() {
          let path = 'challenges';

          history.push(path);
        }

        return (

          <div  style={{width:'100%'}}>
            <h1 style={{margin: '1%'}}>Wyzwania w trakcie realizacji</h1>
            {inprogress.length > 0 &&
              <GridList cellHeight={180} cols={2}>
              {tileData.map(tile => {
                              if(challengeList.includes(`InProgress${tile.id}`)){
                                  return (
                  <GridListTile key={tile.id} classes={{ tile: classes.tileStyle}} style={{cursor:'pointer'}}>  

                    <img className={classes.tileStyle} src={tile.img} alt={tile.title}/>
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
            }

            {inprogress.length == 0 &&

           

            <div style={{boxShadow: '2px 2px 4px rgba(39, 39, 39, 0.2)', width:'50%', backgroundColor: '#FFF', textAlign: 'center', padding: '20px', borderRadius: '8px', cursor: 'pointer'}} onClick={() => goToChallangesList()}>

                  <img src={trophy} style={{width: '15%', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
                  <h2 style={{display:'block'}}>Nie masz aktualnie zadnych wyzwań</h2>
                  <p style={{color: '#0098C9', fontWeight: 'bold', display:'block'}}>Kliknij aby dodać nowe!</p>
            </div>


            }
          
          </div>
        )
};
        

export default ChallengeInProgress;