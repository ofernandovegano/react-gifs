import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
  }
  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.id !== this.props.id;
  }

  render() {
    return (
      <input
        type="text"
        placeholder='Search a GIF'
        className="form-control form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;