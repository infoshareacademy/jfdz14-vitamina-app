import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
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

import styles from './Challenges.module.css';


const ChallengeCard = ({id, title, category, status}) => (
  <GridListTile
    classes={{ tile: styles.card}}
    // onClick={() => this.goToChallenge(challenge.id)}
    // key={id}
    >
    <img
      className={styles.img_style}
      src={ChallengeImage1}
      alt={title}
    />
    <GridListTileBar
      title={title}
      subtitle={<span>{category}</span>}
      actionIcon={<IconButton
            aria-label={`info about ${title}`}
        />}
    />
  </GridListTile>
);

export default ChallengeCard;


//   class ChellengeCard extends React.Component {


//     // goToChallenge = (challengeId) => {
//     //   let data = {};
//     //   this.props.challenges.map(challenge => {
//     //     if(challenge.id === challengeId) {
//     //       data = {
//     //         category: challenge.category,
//     //         description: challenge.description,
//     //         id: challenge.id,
//     //         img: challenge.img,
//     //         title: challenge.title,
//     //         status:  "inProgress",
//     //       }
//     //     };
//     //     return challenge;
//     //   })
//     //   // console.log(data)
//     //   this.props.changeStatusOnProggres(challengeId, data);
//     // }

//     // componentDidMount() {
//     //   this.props.fetchChallenges();
//     // }

//     render() {
//       return (
//         // <div>
//         // <h1 style={{margin: '1%'}}>Twoje wyzwania na dziś</h1>
//         <GridList cellHeight={180} cols={2}>
//           {
//             this.props.challenges.map(challenge => {
//               return (
//                 <GridListTile
//                   classes={{ tile: styles.card}}
//                   // onClick={() => this.goToChallenge(challenge.id)}
//                   key={challenge.img}
//                   >
//                   <img
//                     className={styles.img_style}
//                     src={ChallengeImage1}
//                     alt={challenge.title}
//                   />
//                   <GridListTileBar
//                     title={challenge.title}
//                     subtitle={<span>{challenge.category}</span>}
//                     actionIcon={<IconButton
//                           aria-label={`info about ${challenge.title}`}
//                       />}
//                   />
//                   </GridListTile>
//               )
//             })
//           }
//           </GridList>
//         // </div>
//       );
//     }
//   }

//   const mapStateProps = (state) => ({
//     challenges: state.challenges.data,
//   });

//   const mapDispatchProps = {
//     fetchChallenges,
//     changeStatusOnProggres,
//   }

//   export default connect(mapStateProps, mapDispatchProps)(ChellengeCard);