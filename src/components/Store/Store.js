import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import initialState from './initialState';

const middleware = [thunk];

let storeFinal;


if (process.env.MODE === 'development') {
  const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  });
  storeFinal = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware),
      // other store enhancers if any
  ));
} else {
  storeFinal = createStore(rootReducer, initialState, applyMiddleware(...middleware));
}
const store = storeFinal;
export default store;
