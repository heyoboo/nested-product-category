import React from 'react';
import ReactDOM from 'react-dom';
import Categories from './pages/categories'
import './tailwind.css';
import './index.scss';

const themeName = 'indigo'

ReactDOM.render(
  <React.StrictMode>
    <div className='h-full w-full' data-theme={themeName}>
      <Categories />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);