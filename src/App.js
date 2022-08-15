import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Navigate to="/home" />} />
      <Route path='/home' element={ <Home /> } />
      <Route path='/projects' element={ <Projects /> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
