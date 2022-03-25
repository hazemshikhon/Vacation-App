import React from 'react';

import { Router, Stack, Scene, Actions } from 'react-native-router-flux';
import VacationRequestsController from './app/controllers/VacationRequestsController';

import CreateVacationController from './app/controllers/CreateVacationController';
const App = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="VacationRequestsController" component={VacationRequestsController} title="VacationRequestsController" hideNavBar />
        <Scene key="CreateVacationController" component={CreateVacationController} title="CreateVacationController" hideNavBar initial />
      </Stack>
    </Router>
  );
};

export default App;
