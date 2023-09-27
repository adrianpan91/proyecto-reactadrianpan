const CounterPresentacional = ({
  sumar,
  contador,
  restar,
  nombre,
  setNombre,
}) => {
  return (
    <div className="fotos-img">
      <button onClick={sumar}>sumar</button>
      <h4> {contador} </h4>
      <button onClick={restar}>restar</button>

      <h4>{nombre}</h4>
      <button onClick={() => setNombre("Bienvenidos a tienda Flober!")}>
        Empezar
      </button>
    </div>
  );
};

export default CounterPresentacional;
