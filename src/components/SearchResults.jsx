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
						this.props.articles
							.filter(article => {
								const textFilter = (article.title ? article.title : "");


								
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
									if(categories.includes(article.category)) {
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
									if(article.period >= this.props.filter.period[0]
									&& article.period <= this.props.filter.period[1]){
										isOkPeriod = true;
									}
								}

								if(catFilterStatus && isOkPeriod){
									return true;
								}

							})
							.map((article) => (
							
							
							<GridListTile key=
								{article.id} className=
								{props.classes.tileStyling, props.classes.boxShadow}>  <img data-g="5"src =
								{article.img}alt =
								{article.title}/>
								
								<Link to={`challenges/${article.id}`} >
									<GridListTileBar
										title={article.title}
										subtitle={<span>{this.getCategoryName(article.category)} {`(${article.period} dni)`}</span>}
										actionIcon=
										{
											<IconButton 
											aria-label={`info about $ {article.title}`}
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
