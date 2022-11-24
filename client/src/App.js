import './App.css';
import IntroPage from './components/IntroPage/IntroPage';
import ZoomDashboard from './components/ZoomDashboard/ZoomDashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<IntroPage/>} />
        <Route path='/zoom-dashboard' element={<ZoomDashboard/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
