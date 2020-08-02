import React, { Fragment } from "react";

import TeamMemberCard from "./TeamMemberCard.jsx";
import { MembersList } from "./TeamMemberList";
import "./TeamMemberCard.css"

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import {withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

  // The example data is structured as follows:

	const styles = {
		root: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'flex-start',
			overflow: 'hidden',
			padding: 0
		},
		x: {
			margin: 50
		},
		gridList: {
			width: 500,
      height: 450,
      
      display: 'flex',
      flexWrap: 'wrap',
			justifyContent: 'flex-start',
			overflow: 'hidden',
			padding: 0
    }
    
    
		// tileStyling: {
		// 	width: 100,
		// 	height: 450,
    // },
    
		// boxShadow:{
		// 	boxShadow: '3px 3px 5px #aaaaaa',
		// 	margin: '5px',
		// 	padding: '0 !important'
		// }
	};

  const classes = styles;



const About = () => (

  <Fragment>
    <Grid xs={12} className={classes.root}>

      <div>
        <h1 style={{marginTop: 0}}>About Us</h1>
      </div>

      <Container className={classes.gridList} style={{width: '95%'}}>
        <ul className="team-card" style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          
          listStyleType: 'none',

          padding: '0px'
        }}
        >

          {
            MembersList.map((member) => (
              <li key={member.id} style={{margin: '20px 30px', boxShadow: '3px 3px 5px #aaaaaa'}}>
                <TeamMemberCard card={member} />
              </li>
            ))
          }
        </ul>
      </Container>

    </Grid>

  </Fragment>
);


export default About;
