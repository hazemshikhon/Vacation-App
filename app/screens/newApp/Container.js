import React from 'react';
import { StyleSheet, SafeAreaView, View, StatusBar } from 'react-native';

import Header from './Header';
import colors from '../../config/colors';

const NewContainer = ({ children }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fdfeff' }}>
      <SafeAreaView style={styles.safeAreaView} />
      <StatusBar backgroundColor={colors.primary} barStyle={'light-content'} />
      <Header />
      <View style={styles.mainView}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: colors.white,
    padding: 16,
    height: '100%',
  },
  safeAreaView: {
    backgroundColor: colors.primary,
  },
  KeyboardAvoidingView: {
    flex: 1,
  },
});

export default NewContainer;
