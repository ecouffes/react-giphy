import giphyAPI from '../APIs/giphyAPI';

const startRequest = () => {
  return {
    type: 'START_REQUEST',
  };
};

const receiveData = data => {
  return {
    type: 'RECEIVE_DATA',
    payload: data,
  };
};

export const getUrls = search => {
  return async dispatch => {
    dispatch(startRequest());
    const res = await giphyAPI(search);
    const dataList = res.data.data;
    const imgUrlList = dataList.map(value => value.images.downsized.url);
    // action dispatch with middleware redux-thank
    dispatch(receiveData(imgUrlList));
  };
};
