import { ActionTypes } from "../constants"

const initalState={
    products:[
        {
            id:1,
            title:"Bag",
            des:"this is a bag",
            tags:"hmm",
        },
    ],
}
export const productReducer=(state=initalState,{type,payload})=>{
    switch(type){
        case ActionTypes.ADD_DATA: 
        return state;
        default:
        return state;
    } 
}