/* eslint-disable no-return-assign */
import initialState from '../initialState';
import {
  SET_ORDER,
} from '../../Constants/StoreActionTypes';


export default function (state = initialState, action) {
  // let newState = {};
  console.log(action.payload);
  console.log(state);
  switch (action.type) {
    
      case SET_ORDER:


        return [
            ...state,
           action.payload 
          ];

    default:
      return state;
  }

}


