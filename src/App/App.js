import React from 'react';
import { Provider } from 'react-redux';
import '../App.css';

import store from './store';
import { HomePage } from './HomePage';
import Header from './Header/Header';

const App = () => (
  <Provider store={store}>
    <div className="body">
      <Header/>
      {/*<div className="App">*/}
      {/*<header className="App-header">*/}
      {/*<h1 className="App-title">Welcome to React</h1>*/}
      {/*</header>*/}
      <HomePage/>
    </div>
    {/*</div>*/}
  </Provider>
);

export default App;
