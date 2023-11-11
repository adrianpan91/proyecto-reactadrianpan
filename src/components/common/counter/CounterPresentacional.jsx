import { Button } from "@mui/material";
import "./Counter.css";
const CounterPresentacional = ({ sumar, contador, restar, onAdd }) => {
  return (
    <>
      <div className="botom">
        <Button color="secondary" variant="contained" onClick={restar}>
          -
        </Button>
        <h2>{contador}</h2>
        <Button color="secondary" variant="contained" onClick={sumar}>
          +
        </Button>

        <Button
          color="secondary"
          variant="contained"
          onClick={() => onAdd(contador)}
        >
          Agregar al carrito
        </Button>
      </div>
    </>
  );
};

export default CounterPresentacional;
