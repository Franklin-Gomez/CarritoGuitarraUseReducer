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

// comprobacion del carrito
const initialCart  = () : cartItem[] => { 
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []
}

// states
export const  initialState : CartState = {
    data : db,
    cart : initialCart()
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
        const itemExists = state.cart.find( guitar => guitar.id === actions.payload.item.id )

        let updateCart : cartItem[] = []

        if( itemExists ) {  // identificamos y comprobamos que existe en el carrito 

            updateCart =  state.cart.map( item => {  // recorremos todos los elementos

                if( item.id == actions.payload.item.id ) {  // si el recien agregado ya existe

                    if( item.quantity < CANT_MAX ) {  // y la cantidad sea menor a la maxima

                        return { ...item , quantity : item.quantity + 1 } // aumentamos cantidad de dicho objeto

                    } else { 

                        return item // sino devolvemos el objeto

                    }

                } else { 

                    return item  // si el se agrega por primera devolvemos el carrito

                }

            })

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

        //setCart( prevCart => prevCart.filter( guitar => guitar.id !== id ))

        const updateCart = state.cart.filter ( item => item.id !== actions.payload.id )

        return {
            ...state ,
            cart : updateCart
        }
    }

    if( actions.type == "increaseyQuantity") { 

        const updateCart = state.cart.map( item => { 

            if( item.id === actions.payload.id && item.quantity <= CANT_MAX) { 
                return {
                    ...item ,
                    quantity : item.quantity + 1
                }
            }

            // el resto de elemento que no dimos click no los perdamos.
            return item
        })

        return {
            ...state,
            cart : updateCart
        }
    }

    if( actions.type == "decrementQuantity") { 

        const updateCart = state.cart.map( item => { 

            if( item.id === actions.payload.id && item.quantity > CANT_MIN) { 
                return {
                    ...item ,
                    quantity : item.quantity - 1
                }
            }

            // el resto de elemento que no dimos click no los perdamos.
            return item
        })


        return {
            ...state,
            cart : updateCart
        }
    }

    if( actions.type == "cleanCart") { 
        return {
            ...state ,
            cart : []
        }
    }

    return state

}