import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home/Home';
import { AboutAsync } from '../pages/About/About.async';
// import './styles/index.scss';
import './styles/style.scss'
import { AppRouter } from './providers/router';

const App = () => {
  return (
    <div className={`app`}>
      <AppRouter />
    </div>
  )
};

export default App;
