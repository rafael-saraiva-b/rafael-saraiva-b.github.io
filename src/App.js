import { Route } from 'react-router-dom';
import Sobre from './pages/Sobre'
import Synth from './pages/Synth'
import './App.css';

function App() {
  return (
    <>
      <Route path="/sobre" component={Sobre} />
      <Route exact path="/" component={Synth}/>
    </>
  );
}

export default App;
