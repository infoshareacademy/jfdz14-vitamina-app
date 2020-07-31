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
		// x: {
		// 	margin: 50
		// },
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
			new Date();

			this.state = {
				filter: {
					period: [1,30],
					text: "",
					groups: [0,1,2,3]
				},
				categories: [
					{id: 0, title:"Sylwetka", value:5, selected: false},
					{id: 1, title: "Witalność", value:5, selected: false}, 
					{id: 2, title: "Zwyczaje", value:5, selected: false}, 
					{id: 3, title: "Dieta", value:5, selected: false}
				],
				challanges: [
					{
						img: ChallengeImage1,
						title: 'Spacer dla Twojego umysłu.',
						id: 1,
						category: 0,
						period: 5
					},
					{
						img: ChallengeImage2,
						title: 'Wyśnij sobie spokój.',
						id: 2,
						category: 1,
						period: 25
					},
					{
						img: ChallengeImage3,
						title: 'Pij wodę, będziesz wielki.',
						id: 3,
						category: 2,
						period: 5
					},
					{
						img: ChallengeImage3,
						title: 'Pij wodę, będziesz wielki.',
						id: 4,
						category: 3,
						period: 5
					},
					{
						img: ChallengeImage3,
						title: 'Pij wodę, będziesz wielki.',
						id: 5,
						category: 0,
						period: 5
					},
					{
						img: ChallengeImage3,
						title: 'Pij wodę, będziesz wielki.',
						id: 6,
						category: 1,
						period: 5
					},
					{
						img: ChallengeImage3,
						title: 'Pij wodę, będziesz wielki.',
						id: 7,
						category: 2,
						period: 1
					},
					{
						img: ChallengeImage3,
						title: 'Pij wodę, będziesz wielki.',
						id: 8,
						category: 3,
						period: 1
					},
					{
						img: ChallengeImage3,
						title: 'Pij wodę, będziesz wielki.',
						id: 9,
						category: 3,
						period: 5
					},
					{
						img: ChallengeImage3,
						title: 'Pij wodę, będziesz wielki.',
						id: 0,
						category: 2,
						period: 5
					},
				]


			};
		}


		handleMultiFilterChange = (grp, event, val) => {

			switch(grp){
				case "category":

						// 1. Make a shallow copy of the items
						let categories = [...this.state.categories];
						// 2. Make a shallow copy of the item you want to mutate

						categories.forEach((category, catIndex) => {

							category.selected = false;
							
							val.forEach((value,valueIndex) => {
							
								if(value.id === category.id){
									category.selected = true;
									categories[catIndex] = category;
								}
							});
						});

						this.setState({categories});
					break;
				case "filter_text":
					
					this.setState({
						filter:{
							text: event
						}
					});
					break;

				case "filter_period":
					
					this.setState({
						filter:{
							period: val
						}
					});
					break;
				case "filter_groups":
					let groups = event;

					let newGroupsArr = [];

					groups.forEach((item, index) => {
						if(item.selected){
							newGroupsArr.push(item.key);
						}
					});

					this.setState({
						filter:{
							groups: newGroupsArr
						}
					});
					break;
				default:
			}
			

		}

		render() {
		
		const {classes } = this.props;
		
		return (
			<Grid item xs={9} className={classes.x}>

			<div>
					<h1 style={{marginTop: 0}}>Wyzwania</h1>
			</div>
			
			<div className={classes.root}>
			<SearchBar multiFilterChange={this.handleMultiFilterChange} filter={this.state.filter} articles={this.state.challanges} categories={this.state.categories} classes={classes}/>
			</div>


			</Grid>
		);
	}

}

export default withStyles(styles)(ChallengesList);