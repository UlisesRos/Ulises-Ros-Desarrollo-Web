import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Rutas from './components/rutas/Rutas';
import Hablame from './components/hablame/Hablame';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Rutas/>}/>
        <Route path='/hablame' element={<Hablame/>}/>
      </Routes>
    </Router>
  );
}

export default App;
