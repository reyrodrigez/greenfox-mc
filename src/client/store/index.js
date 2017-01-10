import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

function Reducers() {
  const rootReducer = combineReducers({
    routing: routerReducer,
    form: formReducer
  });

  return rootReducer;
}

Reducers.type = 'factory';
module.exports = Reducers;
