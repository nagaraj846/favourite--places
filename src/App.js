import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect
} from 'react-router-dom';

import TouristPlaceDetails from './Components/touristPlaceDetails';
import TouristPlaces from './Components/touristPlaces';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
          <div className="app-container">
            <Switch>
              <Route exact path="/places" component={TouristPlaces} />
              <Route exact path="/places/:id" component={TouristPlaceDetails} />
              <Redirect to="/places" />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
