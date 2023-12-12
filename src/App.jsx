import 'bootstrap/dist/css/bootstrap.min.css'
import Info from "./components/info";
import Contador from './components/Contador.JSX';

function App() {
  const anioActual = 2023

  return (
    <section>
      <h1 className='display-1 text-center'>Proyecto React</h1>
      {/* <Info/> */}

      <Info comision='c76i' anioActualProps={anioActual} />
      <Contador />
    </section>
  )
}

export default App;