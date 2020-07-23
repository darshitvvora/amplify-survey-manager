import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// import { StateProvider } from './store/store';
import ResultComponent from './module/result';
import SurveyComponent from './module/survey';
import LoginComponent from './module/login';

function App() {
  return (
    // <StateProvider>
    <Switch>
      <Route exact path="/login" component={LoginComponent} />
      <Route path="/survey" component={SurveyComponent} />
      <Route path="/result" component={ResultComponent} />

      {/* <PrivateRoute path="/nested" component={NestedComponent} /> */}
      <Route
        render={() => (
          <Redirect
            to="/survey"
          />
        )}
      />
    </Switch>
    // </StateProvider>
  );
}

export default App;
