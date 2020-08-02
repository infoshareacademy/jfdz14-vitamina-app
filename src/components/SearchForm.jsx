import React from 'react';
import Form from 'react-bootstrap/Form'


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
        return (
            <Form.Group>
                <Form.Control type="text" 
                placeholder="Wyszukaj wyzwania" 
                value={this.state.filter.text} 
                onChange={this.handleOnChange}
                />
            </Form.Group>
        )
    }
}

export default SearchForm;