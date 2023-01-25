import { Route } from 'react-router-dom';
import Primeira from './pages/Primeira'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Synth from './pages/Synth'
import './App.css';

function App() {
  return (
    <>
      <Route path="/sobre" component={Sobre} />
      <Route path="/contato" component={Contato}/>
      <Route path="/synth" component={Synth}/>
      <Route exact path="/" component={Primeira}/>
    </>
  );
}

export default App;
