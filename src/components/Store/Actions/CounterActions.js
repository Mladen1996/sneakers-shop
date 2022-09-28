import {
    SET_COUNTER
  
  } from '../../Constants/StoreActionTypes';
  
  
  // export const updateNotificationAction = payload => (dispatch) => {
  //   dispatch({
  //     type: UPDATE_NOTIFICATION,
  //     payload,
  //   });
  // };
  
  export const setCounter = payload => (dispatch) => {
    dispatch({
      type: SET_COUNTER,
      payload,
    });
    
  };


