import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, StatusBar } from 'react-native';

import Header from '../components/Header';
import colors from '../config/colors';

const Container = ({ scrollView, children, backButton }) => {
  return (
    <>
      {scrollView ? (
        <>
          <SafeAreaView style={styles.safeAreaView} />
          <StatusBar backgroundColor={colors.primary} barStyle={'light-content'} />

          <Header backButton={backButton} />

          <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
            <View style={styles.mainView}>{children}</View>
          </ScrollView>
        </>
      ) : (
        <>
          <SafeAreaView style={styles.safeAreaView} />
          <StatusBar backgroundColor={colors.primary} barStyle={'light-content'} />
          <Header backButton={backButton} />
          <View style={styles.mainView}>{children}</View>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  scroll: {
    height: '100%',
    backgroundColor: colors.white,
  },
  mainView: {
    backgroundColor: colors.white,
    padding: 16,
    flex: 1,
  },
  safeAreaView: {
    backgroundColor: colors.primary,
  },
});

export default Container;
