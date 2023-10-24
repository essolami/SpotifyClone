import { combineReducers } from 'redux'
import categories from './categories';

const reducers = {
    categories,
}

export default combineReducers({...reducers});

