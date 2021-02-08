import React from 'react';
import './App.css';

import Counter from './Counter';

// kiedy jaka forma impor używamy from jak inny component js?

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Counter App in ReactJs</h1>
      </header>
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
