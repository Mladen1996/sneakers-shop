import { combineReducers } from 'redux';
import DataReducer from './Reducers/DataReducer';
import CartReducer from './Reducers/CartReducer';
import OrderReducer from './Reducers/OrderReducer';
import CounterReducer from './Reducers/CounterReducer';


const appReducer = combineReducers({
 allShoes:DataReducer,
 cart:CartReducer,
 order:OrderReducer,
 counter:CounterReducer
});

const rootReducer = (state, action) => {
  // if(action.type === 'USER_LOGED_OUT'){
  //   state= undefined;
  // }

  return appReducer(state, action);
};

export default rootReducer;

