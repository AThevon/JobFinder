import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Single from './pages/Single';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job/:id" element={<Single />} />
      </Routes>
    </div>
  );
}

export default App;
