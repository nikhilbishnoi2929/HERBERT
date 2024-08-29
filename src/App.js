import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sources from './components/vision/Sources';
import Herbert from './components/vision/Herbert';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Herbert />} />
        <Route path='/Sources' element={<Sources />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;