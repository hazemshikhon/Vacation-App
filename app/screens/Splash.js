import React, { useEffect } from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

import colors from '../config/colors';

const Splash = ({}) => {
  useEffect(() => {
    setTimeout(() => {
      Actions.Home();
    }, 2500);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Text style={styles.mainText}> VACATION APP</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  mainText: {
    color: colors.white,
    fontSize: responsiveFontSize(3.8),
    fontWeight: 'bold',
  },
});

export default Splash;
