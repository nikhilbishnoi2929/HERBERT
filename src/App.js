import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sources from './components/vision/Sources';
import FirstComponent from './components/vision/FirstComponent';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<FirstComponent/>} />
    <Route path='/Sources' element={<Sources/>} />
  </Routes>
 </BrowserRouter>
  );
}

export default App;
