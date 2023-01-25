import { Route } from 'react-router-dom';
import Primeira from './pages/Primeira'
import Sobre from './pages/Sobre'
import './App.css';

function App() {
  return (
    <>
      <Route path="/sobre" component={Sobre} />
      <Route exact path="/" component={Primeira}/>
    </>
  );
}

export default App;
