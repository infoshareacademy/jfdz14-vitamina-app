import React, { Fragment } from "react";

import TeamMemberCard from "./TeamMemberCard.jsx";
import { MembersList } from "./TeamMemberList";
import "./TeamMemberCard.css";
import TeamMembersListComponent from "./TeamMembersList";
import ImageCarousel from "./AboutUsCarousel";
import AboutUsContent from "./AboutUsContent";

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import {withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { List } from "@material-ui/core";


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

  container: {
    width: '90%',
    height: '90%',
    padding: '0px',
    
    display: "flex",
    flexWrap: "nowrap",

    boxShadow: "3px 3px 5px #aaaaaa"
    },

    imgCarousel: {
      gridArea:'img',
      width: '40%', 
      height: '100%'
    },

    infoContent: {
      gridArea: 'content',
      width: '60%'
    }
};

const classes = styles;

const About = () => (

  <Fragment>
    <Grid xs={12} className={classes.root}>
      
      <Container style={classes.container}>

        <ImageCarousel style={classes.imgCarousel} />

        <AboutUsContent style={classes.infoContent} />

      </Container>
    </Grid>    

  </Fragment>
);


export default About;
