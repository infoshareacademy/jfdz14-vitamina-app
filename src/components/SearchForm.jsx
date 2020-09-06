import React from 'react';
import Form from 'react-bootstrap/Form'
import { Container, Button, Link, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	input: {
        width: '100%',
        maxWidth: '300px',
        minWidth: '150px',
        margin: '1%',
          '& .MuiInput-underline:after': {
            borderBottomColor: '#272727',
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: '#272727',
            },
        }
    },
})


class SearchForm extends React.Component {

    state={
        filter: this.props.filter
    }

    handleOnChange = (event, name, value) => {
        this.setState({
            filter:{text: event.target.value}
        });
        this.props.onFilterChange(event.target.value);
    }

    render() {
        const { classes } = this.props;
        return (
            <TextField 
                className={classes.input}
                variant="outlined" 
                type="text" 
                placeholder="Wyszukaj po nazwie" 
                value={this.state.filter.text} 
                onChange={this.handleOnChange}
                
                  />
           /* <Form.Group>
                <Form.Control type="text" 
                placeholder="Wyszukaj po nazwie" 
                value={this.state.filter.text} 
                onChange={this.handleOnChange}
                />
            </Form.Group> */
        )
    }
}

export default withStyles(styles)(SearchForm);