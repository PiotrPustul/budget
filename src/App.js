import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import GlobalStyles from './index.css';

import theme from './utils/theme';

import Navigation from './components/Navigation/Navigation';
import Wrapper from './components/Wrapper/Wrapper';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Router>
        <Navigation
          items={[
            { content: 'Homepage', to: '/' },
            { content: 'Budget', to: '/budget' }
          ]}
          RightElement={(
            <div>
              <button>pl</button>
              <button>en</button>
            </div>
          )}
        />

        <Wrapper>
          <Switch>
            <Route exact path="/">Homepage</Route>
            <Route path="/budget">Budget Page</Route>
          </Switch>
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
};

export default App;
