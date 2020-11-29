import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';

function App() {
  return (
 <Provider store={store}>
<div className="app">
    <h1>Welcome to movie app</h1>
     <h2>Redux setup complete</h2>
    </div>

</Provider>

  );
}

export default App;
