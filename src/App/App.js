import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import '../App.css';
import store from './store';
import { HomePage } from './HomePage';
import { UserPage } from './UserPage';
import { Header } from './Header';

const App = () => (
  <Provider store={store}>
    <Router>
      <Container>
        <Header/>
        <Route exact path='/' component={HomePage}/>
        <Route path='/user/:userId' component={UserPage}/>
      </Container>
    </Router>
  </Provider>
);

export default App;
