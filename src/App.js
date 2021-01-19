import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import './index.css';

//Import Components
import Search from './components/Search';
import Navigation from './components/Navigation';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';

//Import Flickr API
import apiKey from './config';
const photoApiKey = apiKey;


class App extends Component {

  constructor() {
    super()
    this.state = {
      photos: []
    };
    console.log(this.state.photos);
  }

  componentDidMount() {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${photoApiKey}&tags=rocks%2C+papers%2C+scissors&accuracy=&is_getty=&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then (responseData => {
        this.setState({ photos: responseData.photos.photo });
        console.log(responseData.photos.photo);
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  performSearch = (query) => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${photoApiKey}&tags=${query}&accuracy=&is_getty=&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then (responseData => {
        this.setState({ photos: responseData.photos.photo });
        console.log(responseData.photos.photo);
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render () {
    return (
      <BrowserRouter>
        <div className="container">
            <Search onSearch={this.performSearch} />
            <Navigation />
            <Gallery data={this.state.photos}/>
          <Switch>
            <Route path="/rock" component={Gallery} />
            <Route path="/paper" component={Gallery} />
            <Route path="/scissors" component={Gallery} />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  };
};

export default App;