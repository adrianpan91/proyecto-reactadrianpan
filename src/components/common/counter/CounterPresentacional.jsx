const CounterPresentacional = ({ sumar, contador, restar, onAdd }) => {
  return (
    <div>
      <button onClick={sumar}>+</button>
      <h4> {contador} </h4>
      <button onClick={restar}>-</button>
      <button onClick={() => onAdd(contador)}>Agregar al carrito</button>
    </div>
  );
};

export default CounterPresentacional;
