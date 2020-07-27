import React from 'react';
import ChallengeImage1 from "./image/challenge1.jpg"
import Button from "@material-ui/core/Button";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  boxShadow: {
    boxShadow: '10px 10px 10px red',
  }
}));


const ChallengeDescription = () => {
  
    const classes = useStyles();
    const theme = useTheme();

  return (
  <div className='container' style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column', maxWidth: 900, marginLeft: 'auto', marginRight: 'auto', alignContent: 'center'}}>
    <img height={'500'} width={'auto'} src={ChallengeImage1} data-id="5" className={classes.boxShadow} />
    <h1>Spacer dla Twojego umysłu.</h1>
    <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatem blanditiis ullam nisi ea animi excepturi tempora facere, adipisci assumenda necessitatibus nulla aut consectetur sunt dolorem ipsum enim nam facilis.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam expedita incidunt, quos provident ex mollitia eaque dolore molestiae praesentium laboriosam similique temporibus fugit! Velit dolor, harum voluptate excepturi est ratione! 
    </article>
    <Button variant="contained" href="/home" style={{backgroundColor: '#0098C9', fontFamily: 'Source Sans Pro', fontSize: '16px', color: '#fff', textTransform: 'none', width: 'auto', borderRadius: '8px', marginTop: 25}}>
            Podejmij się!
    </Button>
  </div>
  )

}

export default ChallengeDescription;