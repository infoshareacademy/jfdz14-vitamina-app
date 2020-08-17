import React from 'react';
import SearchResults from './SearchResults';
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
import SearchFilters from './SearchFilters';
import SearchForm from './SearchForm';

const ChallengesHeader = () => (
	<div>
			 <h1>Wyzwania</h1>
	</div>
);

class SearchBar extends React.Component {

    constructor(props) {
      super(props);

		this.showFilters = this.showFilters.bind(this);
		this.hideFilters = this.hideFilters.bind(this);
		this.operateFilters = this.operateFilters.bind(this);

		this.applyFilters = this.applyFilters.bind(this);


		this.state = {filtersOpen: false}
	}

    handleOnFilterChange = (name, value) => {
        this.setState({
          filter: {text: name}
        });
    }

	applyFilters = (f1, f2, f3) => {

		//document.querySelector(".filtersBar").display = "block";
	}

	showFilters = () => {
		//document.querySelector(".filtersBar").display = "block";
	}

	
	hideFilters = () => {
		//document.querySelector(".filtersBar").display = "none";
	}

	operateFilters = () => {
		if(this.state.filtersOpen){
			this.hideFilters();

			this.setState({
				filtersOpen: false
			});
		}
		else {
			this.showFilters();

			this.setState({
				filtersOpen: true
			});
		}
	}

    handleMultiFilterChange = (grp, event ,val) => {

        this.props.multiFilterChange(grp, event, val);

    }
    handleFilterTextChange = (text) => {

        this.props.multiFilterChange("filter_text", text);


    }

    render() {

      if(this.props && this.props.classes){

        return (
          <div className="container" style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>
						
<<<<<<< HEAD
							<div className="search elements">
								<div>
=======
							<div className="search elements" style={{marginBottom: 20}}>
								<div style={{display: 'flex'}}>
>>>>>>> a680dd07a714f4c9d211d86abd5994eb6c19f65f
											<SearchForm onFilterChange={this.handleFilterTextChange} style={{width:"100%"}}filter={this.props.filter}/>
											{this.state.filtersOpen 
												? <button onClick={this.operateFilters}>Schowaj filtry</button> 
												: <button onClick={this.operateFilters}>Pokaż filtry</button>
											}
								</div>
									{this.state.filtersOpen &&
										<SearchFilters filter={this.props.filter} multiFilterChange={this.handleMultiFilterChange} categories={this.props.categories} applyFilters={this.applyFilters} /> 
									}
							</div>

						<SearchResults classes={this.props.classes} categories={this.props.categories} articles={this.props.articles} filter={this.props.filter} onRefresh={this.onRefresh}/>

					</div>
        )
      }
      else {
				return
			}

    }

}

export default SearchBar;
