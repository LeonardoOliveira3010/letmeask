import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";


// Instalando o react-router-dom com typescript: npom i @types/react-router-dom -d
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    // Englobando os componentes no BrowserRouter
    <BrowserRouter>
      {/* Exact exibe somente com a rota definida */}
      <Route path="/" exact={true} component={ Home } /> 
      <Route path="/room/new" component={ NewRoom } />
    </BrowserRouter>
  );
}

export default App;
