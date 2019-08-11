
import { createStore, combineReducers  } from 'redux';
import studentsReducer from './reducer/students';
import counterReducer from './reducer/counter';
import toggleReducer from './reducer/toggle';

export const Store = createStore(combineReducers({
    students: studentsReducer,
    counter: counterReducer,
    enabled: toggleReducer,
}));