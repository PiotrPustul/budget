import React, { Suspense, Fragment, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import GlobalStyles from './index.css';
import { fetchBudget } from './data/actions/budget.actions';
import theme from './utils/theme';

import Navigation from './components/Navigation/Navigation';
import Wrapper from './components/Wrapper/Wrapper';
import LoadingIndicator from './components/LoadingIndicator/LoadingIndicator';
import Button from './components/Button/Button';

const App = ({ budget, fetchBudget }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    fetchBudget(1);
  }, [fetchBudget]);

  return (
    <Fragment>
      <GlobalStyles />

      <Router>
        <Navigation
          items={[
            { content: 'Homepage', to: '/' },
            { content: 'Budget', to: '/budget' }
          ]}
          RightElement={(
            <div>
              <Button variant='regular' onClick={() => i18n.changeLanguage('pl')}>pl</Button>
              <Button variant='regular' onClick={() => i18n.changeLanguage('en')}>en</Button>
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
    </Fragment>
  );
};

const ConnectedApp = connect(state => {
  return {
    budget: state.budget.budget,
  }
}, {
  fetchBudget
})(App);

const RootApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<LoadingIndicator />}>
        <ConnectedApp />
      </Suspense>
    </ThemeProvider >
  );
};

export default RootApp;
