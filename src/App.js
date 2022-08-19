import Formulario from "./Components/Formulario";
import Titulo from "./Components/Titulo";
import { useState } from 'react';

function App() {
  const [nombre, setNombre] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="App">
      <Titulo texto='Desafío estado de los componentes y eventos'/>

      <Formulario 
      cambiarNombre={(e) => setNombre(e.target.value)}
      cambiarPassword={(e) => setPassword(e.target.value)}
      nombre={nombre}
      password={password}
      />
    </div>
  );
}

export default App;
