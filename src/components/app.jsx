import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx'
import Gif from './gif.jsx'
import GifList from './gif_list';

const GIPHY_API_KEY = '1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "4pMX5rJ4PYAEM"
    };
    this.search = this.search.bind(this);
    this.selectGif = this.selectGif.bind(this);
  }

  search = (query) => {
    giphy(GIPHY_API_KEY).search({
      q: query,
      rating: 'g',
      limit: 10 }, (error, result) => {
      this.setState({
        gifs: result.data.map(giph => giph.id)
      })
    })
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
        <SearchBar searchFunction={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    )
  }
}

export default App;