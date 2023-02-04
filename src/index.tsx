import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Suspense } from 'react';
import ThemeProvider from './theme/ThemeProvider';

render(
  <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Suspense>,
  document.getElementById('root')
)