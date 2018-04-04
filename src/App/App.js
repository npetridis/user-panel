import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import store from './store';
import { Header } from './Header';
import { HomePage } from './HomePage';
import { UserPage } from './UserPage';
import { ErrorMessage} from './core/components/ErrorMessage';

const App = () => (
  <Provider store={store}>
    <Router>
      <Container style={{ height: '100%' }}>
        <Header/>
        <ErrorMessage/>
        <Route exact path='/' component={HomePage}/>
        <Route path='/user/:userId' component={UserPage}/>
      </Container>
    </Router>
  </Provider>
);

export default App;
