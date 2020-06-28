import {placeInfoConstant} from '../constant';

const {GET_PLACE_INFO_SUCCESS, GET_PLACES_INFO_FAILURE} = placeInfoConstant;

export default function placeDetails (state = {}, action) {
    const { type, data = {} } = action;
    switch (type) {
      case GET_PLACE_INFO_SUCCESS:
        return { ...data, isLoading: false };
      case GET_PLACES_INFO_FAILURE:
        return { ...data, isLoading: false };
      default:
        return state;
    }
  }
  