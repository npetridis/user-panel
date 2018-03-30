import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Container } from 'semantic-ui-react';


import '../App.css';
import store from './store';
import { HomePage } from './HomePage';
import { UserPage } from './UserPage';
import { Header } from './Header';

// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
// import 'react-table/react-table.css';
import 'semantic-ui-css/semantic.min.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Container>
        <Header/>
        <Route exact path='/' component={HomePage}/>
        <Route path='/:userId' component={UserPage}/>
      </Container>
    </Router>
  </Provider>
);

export default App;
