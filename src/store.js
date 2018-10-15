import { reducer as reduxFormReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import {
    buttonReducer
} from './redux/reducer/index';

const reducer = combineReducers({
    bnt: buttonReducer
})

const rootReducer = (state, action) => {
    return reducer(state, action)
  }

const store = createStore(rootReducer,
    compose(applyMiddleware(thunk))
);

export default store;