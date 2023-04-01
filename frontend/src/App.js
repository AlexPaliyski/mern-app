import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout'
import Login from './components/Login'
import './styles/App.css';

function App() {
  return (
      <div>
        <Routes>
          <Route path="Layout" element={<Layout />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
  );
}

export default App;
