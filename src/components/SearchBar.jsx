import React from 'react';

class SearchBar extends React.Component {
  state = {
    sliderValue: 1,
  }

  handleSliderChange = (value) => {
    console.log(value)
    // this.setState({
    //   sliderValue: e.target.value,
    // })
  }

  valuetext = () => `${this.state.sliderValue} day`

  render() {
    return(
      <form>
        <label>
          <span>search</span>
          <input type='search' />
        </label>
        <input type='range'/>
      </form>
    );
  }
}

export default SearchBar;