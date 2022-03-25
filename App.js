import React from 'react'

import { Router, Stack, Scene, Actions } from 'react-native-router-flux'
import VacationRequestsController from './app/controllers/VacationRequestsController'


const App = () => {
  return (
    <Router>
      <Stack key='root'>
        <Scene key='VacationRequestsController' component={VacationRequestsController} title='VacationRequestsController' hideNavBar initial />
      </Stack>
    </Router>
  )
}

export default App;
