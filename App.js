import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import VacationRequestsController from './app/controllers/VacationRequestsController';
import Splash from './app/screens/Splash';
import CreateVacationController from './app/controllers/CreateVacationController';
import Home from './app/screens/Home';
import newHome from './app/screens/newApp/Home';
import RequestDetails from './app/screens/RequestDetails';
import store from './app/config/store';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const Stack = createNativeStackNavigator();
const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache(),
});
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="newHome" component={newHome} />
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
