import { Button, IconButton } from "@mui/material";
import { useContext } from "react";

import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const clearCartWithAlert = () => {
    Swal.fire({
      title: "Queres vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si vaciar!",
      denyButtonText: `No vaciar!`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito vaciado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito no ha sido vaciado", "", "warning");
      }
    });
  };

  return (
    <div>
      <h1>Flober Carro</h1>

      {cart.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <h3>{product.price}</h3>
          <h3>cantidad: {product.quantity}</h3>
          <IconButton onClick={() => deleteProductById(product.id)}>
            <DeleteForeverIcon color="secondary" />
          </IconButton>
        </div>
      ))}

      {cart.length > 0 && (
        <div>
          <h2>El total a pagar es : {total}</h2>

          <Link to="/checkout">
            <Button variant="contained" color="success">
              Finalizar compra
            </Button>
          </Link>

          <Button
            variant="contained"
            color="error"
            onClick={clearCartWithAlert}
          >
            Vaciar Carrito
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
