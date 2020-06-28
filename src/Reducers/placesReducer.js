import { placesConstant } from '../constant';

const { GET_PLACES_SUCCESS, GET_PLACES_FAILURE } = placesConstant;

export default function places (state = {}, action) {
    const { type, data = {} } = action;
    switch (type) {
      case GET_PLACES_SUCCESS:
        return { ...data, isLoading: false };
      case GET_PLACES_FAILURE:
        return { ...data, isLoading: false };
      default:
        return state;
    }
  }
  