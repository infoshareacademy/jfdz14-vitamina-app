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


class SearchResults extends React.Component {



	constructor(props) {
		super(props);
	}

	getCategoryName = (id) => {

		let catName = "Nieznana";

		this.props.categories.forEach((item, index) => {
			if(item.id === id){
				catName = this.props.categories[index].title;
			}
		});

		return catName;
	}

	render() {


		const props = this.props;

		if (this.props.categories) {

			return (
			<div className={props.classes.root}>
				<GridList cellHeight={180} cols={4}>
					{
						this.props.challanges
							.filter(challange => {
								const textFilter = (challange.title ? challange.title : "");


								
								let useCatFilter = false;
								let categories = [];
								let catFilterStatus = true;

								if(this.props.categories) {
									
									this.props.categories.forEach((item, index) => {
										if(item.selected){
											useCatFilter = true;
											categories.push(item.id);
										}
									});
								}


								if(useCatFilter) {
									catFilterStatus = false;
									if(categories.includes(challange.category)) {
										catFilterStatus = true;
									}
								}

								if(this.props.filter.text && textFilter.length > 0){

									const textIncludes = textFilter.toLowerCase()
										.includes(this.props.filter.text.toLowerCase());

									return textIncludes;
								}

								let isOkPeriod = true;


								if(this.props.filter.period){

									isOkPeriod = false;
									if(challange.period >= this.props.filter.period[0]
									&& challange.period <= this.props.filter.period[1]){
										isOkPeriod = true;
									}
								}

								if(catFilterStatus && isOkPeriod){
									return true;
								}

							})
							.map((challange) => (
							
							
							<GridListTile key={challange.id} className={props.classes.tileStyling, props.classes.boxShadow}>
								<img src={challange.img} alt={challange.title} />
								
								<Link to={`challenges/${challange.id}`} >
									<GridListTileBar
										title={challange.title}
										subtitle={<span>{this.getCategoryName(challange.category)} {challange.period} dni</span>}
										actionIcon=
										{
											<IconButton 
											aria-label={`info about $ {challange.title}`}
											className={props.classes.icon}>
											</IconButton > }
											/>
								</Link >
							</GridListTile>))
						}
						
						</GridList>
						</div >);
		}
		else {

			this.props.onRefresh();
			return (<div>Brak elementów spełniających kryteria</div>);
		}

	}

}

export default SearchResults; 
