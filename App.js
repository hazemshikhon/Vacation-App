import React from 'react';

import { Router, Stack, Scene } from 'react-native-router-flux';
import VacationRequestsController from './app/controllers/VacationRequestsController';
import Splash from './app/screens/Splash';
import CreateVacationController from './app/controllers/CreateVacationController';
import Home from './app/screens/Home';
const App = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="Splash" component={Splash} title="Splash" hideNavBar initial />
        <Scene key="VacationRequestsController" component={VacationRequestsController} title="VacationRequestsController" hideNavBar />
        <Scene key="CreateVacationController" component={CreateVacationController} title="CreateVacationController" hideNavBar />
        <Scene key="Home" component={Home} title="Home" hideNavBar />
      </Stack>
    </Router>
  );
};

export default App;
