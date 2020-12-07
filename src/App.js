import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
// eslint-disable-next-line no-unused-vars
import Header from './components/header/Header';
import store from './redux/store';
function App() {
  return (
 <Provider store={store}>
<div className="app">
    <Header/>
    <h1>Welcome to movie app</h1>
     <h2>Redux setup complete</h2>
    </div>

</Provider>

  );
}

export default App;
