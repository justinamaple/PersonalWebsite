import React from 'react';
import logo from './logo.svg';
import './App.css';
import Album from './Album.tsx';

function App() {
  function greeter(person: string) {
    return 'Hello, ' + person;
  }

  let user = 'Jane User';

  return (
    <div className="App">
      <header className="App-header">
        <Album />
      </header>
    </div>
  );
}

export default App;
