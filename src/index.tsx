import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Suspense } from 'react';

render(
  <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>,
  document.getElementById('root')
)