import {ActionTypes} from '../constants';
export const SetProducts=(products)=>{
    return {
        type:ActionTypes.ADD_DATA,
        payload:products,
    };
}