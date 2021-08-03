import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import GlobalStyles from './index.css';

import theme from './utils/theme';

import { Navigation } from 'components';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Router>
        <Navigation items={[
          { content: 'Homepage', to: '/' },
          { content: 'Budget', to: '/budget' }
        ]} />

        <Switch>
          <Route path="/" exact>Home Page</Route>
          <Route path="/budget">Budget Page</Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
