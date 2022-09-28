import {
    SET_SHOES_DATA
  
  } from '../../Constants/StoreActionTypes';
  
  
  // export const updateNotificationAction = payload => (dispatch) => {
  //   dispatch({
  //     type: UPDATE_NOTIFICATION,
  //     payload,
  //   });
  // };
  
  export const setShoesData = payload => (dispatch) => {
    dispatch({
      type: SET_SHOES_DATA,
      payload,
    });
    return Promise.resolve();
  };


