import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, StatusBar, Platform, KeyboardAvoidingView } from 'react-native';

import Header from '../components/Header';
import colors from '../config/colors';

const Container = ({ scrollView, children, backButton, styleContainer }) => {
  return (
    <>
      {scrollView ? (
        <>
          <SafeAreaView style={styles.safeAreaView} />
          <StatusBar backgroundColor={colors.primary} barStyle={'light-content'} />

          <Header backButton={backButton} />
          <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior={'padding'} style={styles.KeyboardAvoidingView}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
              <View style={[styles.mainView, styleContainer]}>{children}</View>
            </ScrollView>
          </KeyboardAvoidingView>
        </>
      ) : (
        <>
          <SafeAreaView style={styles.safeAreaView} />
          <StatusBar backgroundColor={colors.primary} barStyle={'light-content'} />
          <Header backButton={backButton} />
          <View style={[styles.mainView, styleContainer]}>{children}</View>
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
  KeyboardAvoidingView: {
    flex: 1,
  },
});

export default Container;
