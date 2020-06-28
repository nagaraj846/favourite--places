import { combineReducers } from 'redux';
// import { connectRouter } from 'connected-react-router';
import places from './placesReducer';
import placeDetails from './placeInfoReducer';

export default combineReducers({
  places,
  placeDetails
})
