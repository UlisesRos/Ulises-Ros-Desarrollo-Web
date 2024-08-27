import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Rutas from './components/rutas/Rutas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Rutas/>}/>
      </Routes>
    </Router>
  );
}

export default App;
