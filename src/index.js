import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import { Provider } from 'react-redux';
import store from './app/store';
import LoginButton from './components/loginButton';
import LogoffButton from './components/logoffButton';
import RegisterButton from './components/resgisterButton';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Container maxWidth="sm">
          <Routes>
            <Route exact path="/login">
              <LoginButton />
            </Route>
            <Route exact path="/logoff">
              <LogoffButton />
            </Route>
            <Route exact path="/register">
              <RegisterButton />
            </Route>
          </Routes>
        </Container>
      </Router>
    </Provider>
  );
};

export default App;