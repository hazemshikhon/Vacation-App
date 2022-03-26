import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { Actions } from 'react-native-router-flux';

import colors from '../config/colors';

const Card = ({ data, navigation }) => {
  const { name, replacementName, mobile, startDate, requestDays } = data;
  return (
    <TouchableOpacity onPress={() => navigation.navigate('RequestDetails', { data })} style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.dateText}>{moment(startDate).format('MMMM D,YYYY')}</Text>

        <View style={styles.daysContainer}>
          <Text style={styles.daysText}>{requestDays} DAYS</Text>
        </View>
      </View>
      <Text style={styles.mainText}>{name}</Text>
      <Text style={styles.mainText}>{mobile}</Text>

      <Text style={styles.replacmentNameText}>{replacementName}</Text>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: colors.light,
    paddingVertical: 16,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  daysContainer: {
    borderRadius: 8,
    backgroundColor: colors.yellow,
    padding: 7,
  },
  dateText: {
    color: colors.darkBlue,
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.1),
  },
  daysText: {
    color: colors.darkYellow,
    fontSize: responsiveFontSize(1.5),
    fontWeight: 'bold',
  },
  mainText: {
    color: colors.dark,
    marginBottom: 4,
    fontSize: responsiveFontSize(1.9),
  },
  replacmentNameText: {
    color: colors.red,
    fontSize: responsiveFontSize(1.8),
    marginBottom: 4,
  },
});
