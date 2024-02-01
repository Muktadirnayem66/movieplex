/* eslint-disable no-unreachable */
const initialState = {
    cartData: []
}



const CartReducer = (state, action)=>{
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                cartData:[...state.cartData, action.payload]
            }
            
            break;

            case "REMOVE_FROM_CART":
                return {
                    ...state,
                    cartData:state.cartData.filter((item)=>item.id !== action.payload.id)
                }
                break;
    
        default:
            return state;
    }
}


export {CartReducer, initialState}