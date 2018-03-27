import React from 'react';
import { Provider } from 'react-redux';

import '../App.css';
import store from './store';
import { HomePage } from './HomePage';
import { Header } from './Header';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const App = () => (
  <Provider store={store}>
    <div className="body">
      <Header/>
      <HomePage/>
    </div>
  </Provider>
);

export default App;
