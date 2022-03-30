import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import VacationRequestsController from './app/controllers/VacationRequestsController';
import Splash from './app/screens/Splash';
import CreateVacationController from './app/controllers/CreateVacationController';
import Home from './app/screens/Home';
import RequestDetails from './app/screens/RequestDetails';
import store from './app/config/store';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="VacationRequestsController" component={VacationRequestsController} />
          <Stack.Screen name="CreateVacationController" component={CreateVacationController} />
          <Stack.Screen name="RequestDetails" component={RequestDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
