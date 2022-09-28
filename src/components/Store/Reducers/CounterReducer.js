/* eslint-disable no-return-assign */
import initialState from '../initialState';
import {
  SET_COUNTER,
} from '../../Constants/StoreActionTypes';


export default function CounterReducer(state = initialState, action) {
  // let newState = {};
  console.log(action.payload);
  console.log(state);
  switch (action.type) {
    case SET_COUNTER:
      return  state=action.payload
   
     
    default:
      return state;
  }

}


