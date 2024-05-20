import { db } from "../db/db"

// Actions
export type CartActions = 
    { type : 'addToCart' , payload : { item : Guitar } } |
    { type : 'removeFromCart' , payload : { id : Guitar['id'] } } |
    { type : 'increaseyQuantity' , payload : { id : Guitar['id'] } } 


// types
export type CartState = { 
    data : Guitar[],
    cart : cartItem[]
    
}

// states
export const  initialState : CartState  = { 
    data : db,
    cart : []
}

const CANT_MAX = 5;
const CANT_MIN = 1;

export const cartReducer = (
    state : CartState = initialState ,
    actions : CartActions 
    

    ) => { 
        
    if( actions.type == 'addToCart') { 

        const itemExists = state.cart.find( guitar => guitar.id === actions.payload.item.id )

        let updateCart : cartItem[] = []

        if( itemExists ) {  // existe en el carrito 

            updateCart  = state.cart.map( guitarra => { // recorremos nuestro estate

                if(guitarra.id == actions.payload.item.id){ // identificamos el objeto

                    if( guitarra.quantity < CANT_MAX ) { 

                        return {
                            ...guitarra,
                            quantity : guitarra.quantity + 1
                        }

                    } else { 

                        return guitarra

                    }
                }

                return guitarra
            })

        } else { // no existe en el carrito

            const newItem : cartItem =  { ...actions.payload.item , quantity : 1  }
            updateCart =  [ ...state.cart , newItem ]; 
        }

        return {
            ...state,
            cart : updateCart
        }
    }

    if( actions.type == 'removeFromCart') { 
        // nos develve todos los elementos menos el que se le dio click
        const updateCart = state.cart.filter( guitar => guitar.id !== actions.payload.id )
        
        return { 
            ...state,
            cart : updateCart
        }
    }

    if( actions.type == 'increaseyQuantity') { 

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

    return { 
        ...state
    }
}