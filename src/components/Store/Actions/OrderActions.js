import {
    SET_ORDER
      
      } from '../../Constants/StoreActionTypes';
      

      export const setOrder = payload => (dispatch) => {
        dispatch({
          type: SET_ORDER,
          payload,
        });
        
      };