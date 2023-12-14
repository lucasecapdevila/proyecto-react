import { useState } from "react";

const Contador = () => {
  const [numero, setNumero] = useState(1)
  
  // let numero = 10;

  return (
    <article className="text-center">
      <h2>Contador</h2>
      <p>{numero}</p>
      <button
        className="btn btn-primary"
        onClick={() => setNumero(numero + 1)}
      >
        +1
      </button>

      {/* TODO: Agregar un botón para decrementar en -1 el valor del state */}
    </article>
  );
};

export default Contador;
