import React from 'react';
import SearchForm from './SearchForm';

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
//import Form from 'react-bootstrap/Form'
//import AlbumsForm from './AlbumsForm'

class SearchBar extends React.Component {


    constructor(props) {
      super(props);

      console.log("PROPS START 2");


      console.log(props);
      console.log("PROPS END 2");
  }

    componentDidMount() {


      const props = this.props;
      console.log("Searchbar props");
      console.log(props);
      console.log("End");
      this.setState({
        articles: props.articles,
        classes: props.classes,

      })

    }

    handleOnFilterChange = (name, value) => {
        console.log(name);
        console.log(value);

        this.setState({
          filter: name
        });


    }
    
    onRefresh = () => {
      console.log("STATE SearchBar");
      console.log(this.state);
    }

    render() {

      if(this.state && this.state.classes){
        return (
          <div className="m-4">

          <h1>challanges</h1>

          <SearchForm onFilterChange={this.handleOnFilterChange}
              filter={this.state.filter}/>
          <SearchResults classes={this.state.classes} articles={this.state.articles} filter={this.state.filter} onRefresh={this.onRefresh}/>
          </div>
        )
      }
      else

      {
        return ("<div>LOADING</div>");
      }

    }

}


export default SearchBar;

//klasa a nie const bo chcemy pobierac dane z api
//chcemy je wyswietlic
//funkcyjny nie robi fetcha, nie bedzie wiedzial co zrobic z tymi danymi
//a klasowy komponent bedzie w stanie przeladowac dane i sie zmienic 
//klasa musi miec zawsze jedna funkcje zeby dzialala - funkcje render. I render musi cos zwrocic