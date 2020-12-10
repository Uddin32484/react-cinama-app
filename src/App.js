// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Provider } from 'react-redux';
import './App.css';
// eslint-disable-next-line no-unused-vars
import Header from './components/header/Header';
// eslint-disable-next-line no-unused-vars
import Main from './components/main/Main';
import store from './redux/store';
function App() {
  return (
 <Provider store={store}>
<div className="app">
 <Header/>
   <Main/>
     <h2>Redux setup complete</h2>
    </div>

</Provider>

  );
}

export default App;
