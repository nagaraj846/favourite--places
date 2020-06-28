import axios from 'axios';

const getService = (dispatch, URL, successType, failureType, cb) => {
  const headers = {
    'Content-Type': null
  }
  return axios.get(
    URL,
    {
      headers: {
        ...headers
      }
    }
  ).then((data) => {
      dispatch({ type: successType, data });
      cb(data);
  }).catch((err) => {
    dispatch({ type: failureType, data: err });
  });
};

export default getService;
