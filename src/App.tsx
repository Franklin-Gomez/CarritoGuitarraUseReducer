import { useReducer } from "react";
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { useCart } from "./hooks/useCart";
import { cartReducer , initialState } from "./reducers/cart-reducer";

function App() {

  const { decrementQuantity , cleanCart , cartTotal } = useCart();

  const [ state , dispatch ] = useReducer(cartReducer,initialState)


  return (
    <>
      <Header
        // props
        cart={state.cart}
        dispatch={dispatch}
        decrementQuantity={decrementQuantity}
        cleanCart={cleanCart}
        cartTotal={cartTotal}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">

          { state.data.map(( guitar ) => {
            return <Guitar
              // props
              guitar={ guitar }  
              key={guitar.id}
              dispatch={dispatch}
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
