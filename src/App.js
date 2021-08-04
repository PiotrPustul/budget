import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useTranslation } from 'react-i18next';

import GlobalStyles from './index.css';

import theme from './utils/theme';

import Navigation from './components/Navigation/Navigation';
import Wrapper from './components/Wrapper/Wrapper';

const App = () => {
  const { i18n } = useTranslation();

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
              <button onClick={() => i18n.changeLanguage('pl')}>pl</button>
              <button onClick={() => i18n.changeLanguage('en')}>en</button>
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

const RootApp = () => {
  return (
    <Suspense fallback="Loading...">
      <App />
    </Suspense>
  );
};

export default RootApp;
