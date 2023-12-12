const Info = ({comision, anioActualProps}) => {
  // Aquí va la lógica del componente

  return (
    // Aquí puede ir lógica
    <section>
      {/* Aquí va todo el maquetado del componente */}
      <h2>Conceptos de React {comision}</h2>
      
      <p>React es una biblioteca de JavaScript desarrollada por Facebook que se utiliza para construir interfaces de usuario interactivas y eficientes. Su enfoque se centra en la creación de componentes reutilizables que representan diferentes partes de la interfaz de usuario. React utiliza un paradigma de programación declarativa, lo que significa que los desarrolladores describen cómo debería ser la interfaz de usuario y React se encarga de manejar los cambios de manera eficiente. <br /> Comisión: {anioActualProps}</p>
    </section>
  );
};

export default Info;