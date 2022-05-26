import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Tasks from './pages/tasks';

import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={ <Tasks />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
