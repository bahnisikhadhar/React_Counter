import React from 'react';
import ReactDOM from 'react-dom/client';
// import Counter from "./Counter";
import Autocounter from './Autocounter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Counter /> */}
    <Autocounter/>
  </React.StrictMode>
);

