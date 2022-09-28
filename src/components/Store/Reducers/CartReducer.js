/* eslint-disable no-return-assign */
import initialState from '../initialState';
import {
  ADD_TO_CART,REMOVE_CART,REMOVE_ITEM_CART
} from '../../Constants/StoreActionTypes';


export default function (state = initialState, action) {
  // let newState = {};
  console.log(action.payload);
  console.log(state);
  switch (action.type) {
    
      case ADD_TO_CART:


        return [
            ...state,
           action.payload 
          ];

      case REMOVE_CART:
          const newState=[];

          return newState;

     case REMOVE_ITEM_CART:
        
        var a=state.filter(item=>item.id!==action.payload);
         return a;

    default:
      return state;
  }

}


