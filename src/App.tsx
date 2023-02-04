import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import { AboutAsync } from './pages/About/About.async';
import { useTheme } from './theme/useTheme';
import './styles/index.scss';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      App
      <Link to={'home'}>home</Link>
      <Link to={'about'}>about</Link>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutAsync />} />
      </Routes>
    </div>
  )
};

export default App;
function setTheme(arg0: any) {
  throw new Error('Function not implemented.');
}

