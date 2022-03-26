import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import Container from '../components/Container';
import colors from '../config/colors';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import store from '../config/store';
const Home = ({ navigation }) => {
  const x = store.getState();
  console.log('das', x);
  return (
    <Container styleContainer={styles.styleContainer}>
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('CreateVacationController')}>
        <Text style={styles.text}>Request Vacation</Text>
        <Image source={require('../config/images/request3.png')} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('VacationRequestsController')}>
        <Text style={styles.text}>List Of Requests</Text>
        <Image source={require('../config/images/list.jpeg')} style={styles.image} />
      </TouchableOpacity>
    </Container>
  );
};
// store.subscribe(Home);
export default Home;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 12,
  },
  container: {
    flexDirection: 'row',
    borderRadius: 8,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.light,
    padding: 25,
    marginBottom: 40,
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.7),
    color: colors.primary,
  },
  headerText: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 50,
  },
});
