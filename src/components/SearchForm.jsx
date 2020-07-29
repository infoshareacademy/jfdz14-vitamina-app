import React from 'react';
import Form from 'react-bootstrap/Form'


class SearchForm extends React.Component {

    state={
        filter: this.props.filter
    }

    handleOnChange = (event) => {

        this.setState({
            filter: event.target.value
        });

        this.props.onFilterChange(event.target.value);
    }

    render() {
        return (
            <Form.Group>
                <Form.Control type="text" 
                placeholder="Search articles" 
                value={this.state.filter} 
                onChange={this.handleOnChange}
                />
            </Form.Group>
        )
    }
}

export default SearchForm;