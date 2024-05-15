import { db } from "../db/db"

export type CartActions = 
{ type : 'addToCart' , payload : { item : Guitar }} |
{ type : 'removeFromCart' , payload : { id : Guitar['id'] }} |
{ type : 'increaseyQuantity' , payload : { id : Guitar['id'] }} |
{ type : 'decrementQuantity' , payload : { id : Guitar['id'] }} |
{ type : 'cleanCart'} 

export type CartState = { 
    data : Guitar[],
    cart : cartItem[]
}

export const  initialState : CartState = {
    data : db,
    cart : []
}