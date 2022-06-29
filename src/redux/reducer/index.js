import {combineReducers} from 'redux';
import {productReducer}  from './reducer';
const reducers=combineReducers({
    allproduct:productReducer,
});
export default reducers;