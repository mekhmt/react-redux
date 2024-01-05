
import {createStore, combineReducers} from 'redux'
const initial ={
    value:0,
    color:"red"
}


// function valueReducer(state = initial,action){
//     switch(action.type){
//         case "change_value":
//             return {...state,value:state.value+action.payload}
//         case "change_color":
//             return {...state,color:action.payload}
//         default:
//             return state 
//     }
// }

// function valueReducer(state=initial,action){
//     return {
//         value:value(state.value,action),
//         color:color(state.color,action)
//     }
// }


const valueReducer = combineReducers({
    value,
    color
})
function value(state=0,action){
    switch(action.type){
        case 'change_value':
            return state+action.payload
        default:
                return state
    }
}

function color(state="yellow",action){
    switch(action.type){
        case 'change_color':
            return action.payload
        default:
            return state
    }
}







const store = createStore(valueReducer);
export default store
