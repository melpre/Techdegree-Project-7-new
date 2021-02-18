/******************************************
Treehouse FSJS Techdegree:
project 7 - Image Gallery App using React
by Melissa Preece
I am aiming for the grade Exceeds Expectations but will accept Meets Expectations as well.
******************************************/

//Import React libraries and style sheet
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
import PageError from './components/PageError';

//Import Flickr API
import apiKey from './config';
const photoApiKey = apiKey;


//Container Component: fetches data then renders components passing in data
class App extends Component {

  constructor() {
    super()
    this.state = {
      cats: [],
      dogs: [],
      fish: [],
      search: [],
      loading: true
    };
  };

  componentDidMount() {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${photoApiKey}&tags=cats&accuracy=&is_getty=&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then (responseData => {
        this.setState({
          cats: responseData.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });

    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${photoApiKey}&tags=dogs&accuracy=&is_getty=&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then (responseData => {
        this.setState({
          dogs: responseData.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
    });

    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${photoApiKey}&tags=fish&accuracy=&is_getty=&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then (responseData => {
        this.setState({
          fish: responseData.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
    });
  };


  performSearch = (query) => {
    this.setState({
      loading: true
    });
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${photoApiKey}&tags=${query}&accuracy=&is_getty=&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then (responseData => {
        this.setState({
          search: responseData.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  };

  render () {
    return (
      <BrowserRouter>

        <div className="container">

          <Search onSearch={this.performSearch} />

          <Navigation />

          <Switch>
            <Route exact path='/'>
                { (this.state.loading)
                  ? <p>Loading...</p>
                  : <Gallery data={this.state.cats} />
                }
            </Route>
            <Route exact path='/search/:query'>
                { (this.state.loading)
                  ? <p>Loading...</p>
                  : <Gallery data={this.state.search} />
                }
            </Route>
            <Route path="/cats" render={ () => <Gallery data={this.state.cats} /> } />
            <Route path="/dogs" render={ () => <Gallery data={this.state.dogs} /> } />
            <Route path="/fish" render={ () => <Gallery data={this.state.fish} /> } />
            <Route component={PageError} />
          </Switch>

        </div>

      </BrowserRouter>
    );
  };
};

export default App;