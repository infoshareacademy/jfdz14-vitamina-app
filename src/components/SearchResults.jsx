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
    componentDidMount() {



      console.log("Searchbar props");

      this.setState({
        articles: this.props.articles,
        classes: this.props.classes,
        filter: this.props.filter
      });
      console.log(this.state);
      console.log("End");
    }

      render(){



        const props = this.props;

        if(this.props.filter){


          console.log("Rendering Results...");
          console.log(this.props);
          console.log(this.props.articles);
          console.log(this.props.filter);
  

        return (

          <div className={props.classes.root}>
<GridList cellHeight={180} cols={3}>
            {

              this.props.articles
                .filter(article => {
                    const textFilter = article.title.toLowerCase()
                        .includes(this.props.filter.toLowerCase());

                        return textFilter;
                })
                .map((article) => (
                  <GridListTile  key={article.id} className={props.classes.tileStyling, props.classes.boxShadow}>  
      
                    <img data-g="5" src={article.img} alt={article.title}/>
                    <Link to={`challenges/${article.id}`}>
                    <GridListTileBar
                      title={article.title+"asdsad"}
                      subtitle={<span>{article.category}</span>}
                      actionIcon={
                        <IconButton aria-label={`info about ${article.title}`} className={props.classes.icon}>
                        </IconButton>
                      }
                    />
                    </Link>
                  </GridListTile>
              ))
            }
      </GridList>
          </div>
        );
          }
          else{

            this.props.onRefresh();
            console.log(this.state);
            console.log("FILTER BY: "+props.filter);
            console.log(props);


            return ("<div>OK XX</div>");
          }

      }
  
}


export default SearchResults;
