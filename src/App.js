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

//Import Flickr API
import apiKey from './config';
const photoApiKey = apiKey;


class App extends Component {

  constructor() {
    super()
    this.state = {
      photos: [],
      loading: true
    };
    console.log(this.state.photos);
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'cats,%20dogs,%20fish') => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${photoApiKey}&tags=${query}&accuracy=&is_getty=&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then (responseData => {
        this.setState({ 
          photos: responseData.photos.photo,
          loading: false 
        });
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
          <Route exact path='/'>
              { (this.state.loading)
                ? <p>Loading...</p>
                : <Gallery data={this.state.photos} />
              }
          </Route>

          <Switch>
            {/* Need to figure out how to render Gallery component to filter each topic */}
            {/* <Route path="/cats" render={ () => <Gallery data={} /> } /> */}
            {/* <Route path="/dogs" render={ () => <Gallery data={} /> } /> */}
            {/* <Route path="/fish" render={ () => <Gallery data={} /> } /> */}
          </Switch>

        </div>

      </BrowserRouter>
    );
  };
};

export default App;