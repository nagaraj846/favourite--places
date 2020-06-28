import getService from '../services/getService';
import {placesConstant} from '../constant';

const {GET_PLACES_SUCCESS, GET_PLACES_FAILURE} = placesConstant;

const placesAction = (payload = {}, cb) => (dispatch) => {
    // added external link to enable CORS from browser
  const Url = 'https://cors-anywhere.herokuapp.com/http://roadtrippers.herokuapp.com/api/v1/places/';
  
  getService(dispatch, Url, GET_PLACES_SUCCESS, GET_PLACES_FAILURE, cb);
};

export default placesAction;
