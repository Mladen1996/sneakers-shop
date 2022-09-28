import {
ADD_TO_CART,REMOVE_CART,REMOVE_ITEM_CART
  
  } from '../../Constants/StoreActionTypes';
  
  
  // export const updateNotificationAction = payload => (dispatch) => {
  //   dispatch({
  //     type: UPDATE_NOTIFICATION,
  //     payload,
  //   });
  // };
  


  export const addToCart = payload => (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload,
    });
    
    
  };

  export const removeCart = payload => (dispatch) => {
    dispatch({
      type: REMOVE_CART,
      payload,
    });

  };

  export const removeItemCart = payload => (dispatch) => {
    dispatch({
      type: REMOVE_ITEM_CART,
      payload,
    });

  };