import getService from '../services/getService';
import {placeInfoConstant} from '../constant';

const {GET_PLACE_INFO_SUCCESS, GET_PLACES_INFO_FAILURE} = placeInfoConstant;

const placeInfoAction = (payload = {}, cb) => (dispatch) => {
    const { id } = payload
  const Url = `https://cors-anywhere.herokuapp.com/http://roadtrippers.herokuapp.com/api/v1/place/${id}/`;
  getService(dispatch, Url, GET_PLACE_INFO_SUCCESS, GET_PLACES_INFO_FAILURE, cb, id);
};

export default placeInfoAction;
