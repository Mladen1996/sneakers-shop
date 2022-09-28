/* eslint-disable no-return-assign */
import initialState from '../initialState';
import {
  SET_SHOES_DATA,
} from '../../Constants/StoreActionTypes';


export default function DataReducer(state = initialState, action) {
  // let newState = {};
  switch (action.type) {
    case SET_SHOES_DATA:
      return Object.assign({}, state, {
        id:action.payload,
        name: action.payload,
        price:action.payload,
        image:action.payload,
        size:action.payload
      })


    default:
      return state;
  }

}


