import React from 'react';
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from '@material-ui/core/styles';
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

/*import { tileData } from './ChallengesList';*/
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  boxShadow: {
    boxShadow: '3px 3px 5px #aaaaaa',
  }
}));

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
  
const ChallengeDescription = (props) => {
  
  const classes = useStyles();
  const theme = useTheme();

  const [finished, setFinished] = useState(null)

  let { id } = useParams()
  const challenge = tileData.find(challenge => challenge.id.toString() === id);

 const handleInProgress = () => {
    setFinished(false)
    console.log(finished)
    localStorage.setItem(`InProgress${challenge.id}`, JSON.stringify(challenge))
  }
  const handleFinished = () => {
    setFinished(true)
    console.log(finished)
    localStorage.removeItem(`InProgress${challenge.id}`)
    localStorage.setItem(`Finished${challenge.id}`, JSON.stringify(challenge))
} 
    let challengeList = [];
    for(let i = 0; i < localStorage.length; i++){
      let key = localStorage.key(i);
      challengeList.push(key); 
    }

return (
  <>
          <div className='container' style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column', maxWidth: 900, marginLeft: 'auto', marginRight: 'auto', alignContent: 'center'}}>
          <img height={'500'} width={'auto'} src={challenge.img} data-id="5" className={classes.boxShadow} />
          <h1>{challenge.title}</h1>
          <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatem blanditiis ullam nisi ea animi excepturi tempora facere, adipisci assumenda necessitatibus nulla aut consectetur sunt dolorem ipsum enim nam facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam expedita incidunt, quos provident ex mollitia eaque dolore molestiae praesentium laboriosam similique temporibus fugit! Velit dolor, harum voluptate excepturi est ratione! 
          </article>
          
          { !challengeList.includes(`InProgress${challenge.id}`) || finished ? (
        <Button variant="contained" onClick={handleInProgress} style={{backgroundColor: '#0098C9', fontFamily: 'Source Sans Pro', fontSize: '16px', color: '#fff', textTransform: 'none', width: 'auto', borderRadius: '8px', marginTop: 25}}>
        Podejmij się!
      </Button>) : 
      (<Button variant="contained" onClick={handleFinished} style={{backgroundColor: '#364954', fontFamily: 'Source Sans Pro', fontSize: '16px', color: '#fff', textTransform: 'none', width: 'auto', borderRadius: '8px', marginTop: 25}}>
                        Zakończ
                </Button>) }
        </div>
  </>

)

}


export default ChallengeDescription;
export { tileData };
