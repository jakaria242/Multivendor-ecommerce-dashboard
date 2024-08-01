import React, { lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import store from './store/store.js';
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import MyComponent from './errorhandle/Error.jsx';
const App = lazy(()=>import('./App'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback="loding......">
        <App />
        <MyComponent/>
        <Toaster 
          toastOptions={{
            position : "top-right",
            style : {
              background : '#283046',
               color : 'white'
            }
          }}
        />
      </Suspense>
    </Provider>
  </BrowserRouter>
);
reportWebVitals();
