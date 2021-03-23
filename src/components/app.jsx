import React, { Component } from 'react';

import SearchBar from './search_bar.jsx'
import Gif from './gif.jsx'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "4pMX5rJ4PYAEM"
    };
    // this.search = this.search.bind(this);
    this.selectGif = this.selectGif.bind(this);
  }
  
  selectGif(id) {
    this.setState({
      selectedGifId: id
    });
  }
  
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene"></div>
      </div>
    )
  }
}

export default App;