import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import Container from '../components/Container';
import RowText from '../components/RowText';
import reducer from '../config/reducers/reducer';

import { createStore } from 'redux';
import store from '../config/store';

const Redux = () => {
  const store = createStore(reducer);

  return (
    <Container>
      <Text
        onPress={() => {
          store.dispatch({
            type: 'addDay',
          });
          console.log(store.getState());
        }}>
        fsdfsdfsd
      </Text>
      <RowText textOne={store.getState()} />
      <Text
        onPress={() => {
          store.dispatch({
            type: 'removeDay',
            payload: {
              id: 0,
            },
          });
          console.log(store.getState());
        }}>
        delete
      </Text>
      <Text
        onPress={() => {
          console.log(store.getState().length);
        }}>
        length
      </Text>
    </Container>
  );
};
export default Redux;
store.subscribe(Redux);
