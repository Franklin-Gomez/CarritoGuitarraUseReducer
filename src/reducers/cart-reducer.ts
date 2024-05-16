import { act } from "react-dom/test-utils"
import { db } from "../db/db"

// actions
export type CartActions = 
{ type : 'addToCart' , payload : { item : Guitar }} |
{ type : 'removeFromCart' , payload : { id : Guitar['id'] }} |
{ type : 'increaseyQuantity' , payload : { id : Guitar['id'] }} |
{ type : 'decrementQuantity' , payload : { id : Guitar['id'] }} |
{ type : 'cleanCart'} 

// types 
export type CartState = { 
    data : Guitar[],
    cart : cartItem[]
}

// states
export const  initialState : CartState = {
    data : db,
    cart : []
}


// Reducer
export const cartReducer = ( 

    state : CartState = initialState,
    actions : CartActions

    ) => { 

    // dispatch 
    if( actions.type == "addToCart") { 
        return {
            ...state
        }
    }

    if( actions.type == "removeFromCart") { 
        return {
            ...state
        }
    }

    if( actions.type == "increaseyQuantity") { 
        return {
            ...state
        }
    }

    if( actions.type == "decrementQuantity") { 
        return {
            ...state
        }
    }

    if( actions.type == "cleanCart") { 
        return {
            ...state
        }
    }

    return state

}




