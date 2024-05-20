import { useEffect, useState , useMemo} from "react"
import { db } from "../db/db";

export const useCart = () => { 
 
    // comprobacion del carrito
    const initialCart  = () : cartItem[] => { 
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }

    // Hooks
    //const [data , setData ] = useState([]);
    const [ data ] = useState( db)
    const [cart , setCart ] = useState(initialCart);



    // useEffect( () => { 
    //     setData( db )
    // }, []);

    const CANT_MAX = 5;
    const CANT_MIN = 1;


    useEffect( () => { 
        localStorage.setItem('cart', JSON.stringify(cart) )
    } , [cart] )

    // function addToCart( item : Guitar ){
    //     // comprobacion que elemento existe en el state 
    //     const itemExists = cart.findIndex( guitar => guitar.id === item.id )

    //     if( itemExists >= 0) {  // existe en el carrito 

    //         if(cart[itemExists].quantity > CANT_MAX ) return

    //         const updateCart = [...cart];
    //         updateCart[itemExists].quantity++
    //         setCart(updateCart)

    //     } else { // no existe en el carrito
    //         const newItem : cartItem =  { ...item , quantity : 1  }
    //         setCart( [ ...cart , newItem ]);
    //     }
    // }

    // function removeFromCart( id : Guitar['id']){
    //     // nos develve todos los elementos menos el que se le dio click
    //     setCart( prevCart => prevCart.filter( guitar => guitar.id !== id ))
    // }

    // function increaseyQuantity(id : Guitar['id']) { 
    //     const updateCart = cart.map( item => { 

    //             if( item.id === id && item.quantity <= 5) { 
    //             return {
    //                 ...item ,
    //                 quantity : item.quantity + 1
    //             }
    //         }

    //         // el resto de elemento que no dimos click no los perdamos.
    //         return item
    //     })

    //     setCart(updateCart)

    // }


    // function decrementQuantity( id : Guitar['id'] ) { 
    //     const updateCart = cart.map( item => { 
    //         if( item.id === id  && item.quantity > CANT_MIN) {
    //             return{
    //                 ...item , 
    //                 quantity : item.quantity - 1
    //             }
    //         }
    //         return item
    //     })

    //     setCart( updateCart )
    // }

    // function cleanCart()  { 
    //     setCart([])
    // }

    // State Derivado
    //const isEmpty = useMemo( () => { return cart.length === 0 } , [cart] ) 
    // const cartTotal =  useMemo( () => { return cart.reduce( ( total , item ) => total + ( item.quantity * item.price ) , 0 ) } , [cart] )


    return { initialCart  , data , cart }
}