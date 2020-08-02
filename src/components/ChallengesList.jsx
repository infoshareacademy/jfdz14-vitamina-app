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
import ListGroup from "react-bootstrap/ListGroup"
import SearchBar from './SearchBar';
import Grid from '@material-ui/core/Grid';

import {withStyles } from '@material-ui/core/styles';

  // The example data is structured as follows:

	const styles = {
		root: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'flex-start',
			overflow: 'hidden',
			padding: 0

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
	};

    class ChallengesList extends React.Component {


		constructor(props){
			super(props);
		}


		render() {
		
		const {classes } = this.props;
		
		return (
			<Grid item xs={9} className={classes.x} style={{marginLeft: 'auto', marginRight: 'auto'}}>
			<div>
					<h1 style={{marginTop: 0}}>Wyzwania</h1>
			</div>
			<div className={classes.root}>
			<SearchBar multiFilterChange={this.props.multiFilterChange} filter={this.props.filter} challanges={this.props.challanges} categories={this.props.categories} classes={classes}/>
			</div>
			</Grid>
		);
	}

}

export default withStyles(styles)(ChallengesList);
