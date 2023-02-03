import { Routes, Route, Link } from 'react-router-dom';
import classes from './style.module.scss';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    <div className={classes.text}>
      App
      <Link to={'home'}>home</Link>
      <Link to={'about'}>about</Link>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
};

export default App;
