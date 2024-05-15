type Guitar = { 
    id : number ;
    name : string ;
    image : string ;
    description : string ;
    price : number ;
}

type cartItem = Guitar & { 
    quantity : number ;
}