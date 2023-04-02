import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout'
import Login from './components/Login'
import './styles/App.css';
import VrVideoPlayer from "./components/VrVideoPlayer";
import Watchlist from "./components/Watchlist";
import LandingPage from "./components/LandingPage";

function App() {
  return (
      <div>
        <Routes>
            <Route path="Layout" element={<Layout />} >
                <Route index element={<Watchlist/>}/>
                <Route path="VrVideoPlayer" element={<VrVideoPlayer/>}/>
            </Route>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="Login" element={<Login />} />
        </Routes>
      </div>
  );
}

export default App;
