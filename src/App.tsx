import { useReducer } from "react";
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { db } from "./db/db";
import { useCart } from "./hooks/useCart";
import { cartReducer, initialState } from "./reducers/cart-reducer";

function App() {

  const {  addToCart , removeFromCart , increaseyQuantity , decrementQuantity , cart , cleanCart , isEmpty , cartTotal } = useCart();

  const [ state , dispach] = useReducer( cartReducer , initialState )

  return (
    <>
      <Header
        // props
        cart={cart}
        removeFromCart={removeFromCart}
        increaseyQuantity={increaseyQuantity}
        decrementQuantity={decrementQuantity}
        cleanCart={cleanCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">

          { db.map(( guitar ) => {
            return <Guitar
              // props
              guitar={ guitar }  
              key={guitar.id}
              addToCart={addToCart}
            />
          })}
          
        </div>  {/* cierre de container */}
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App
