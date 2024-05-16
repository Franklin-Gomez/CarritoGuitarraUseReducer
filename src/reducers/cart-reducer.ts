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

const CANT_MAX = 5;
const CANT_MIN = 1;

// Reducer
export const cartReducer = ( 

    state : CartState = initialState,
    actions : CartActions

    ) => { 

    // dispatch 
    if( actions.type == "addToCart") { 

        // comprobacion que elemento existe en el state 
        const itemExists = state.cart.findIndex( guitar => guitar.id === actions.payload.item.id )

        let updateCart : cartItem[] = []

        if( itemExists >= 0) {  // existe en el carrito 

            if(state.cart[itemExists].quantity > CANT_MAX ) return

            updateCart = [...state.cart];
            updateCart[itemExists].quantity++


        } else { // no existe en el carrito
            
            const newItem : cartItem =  { ...actions.payload.item , quantity : 1  }
            updateCart = [ ...state.cart , newItem ];

        }

        return {
            ...state,
            cart : updateCart
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




