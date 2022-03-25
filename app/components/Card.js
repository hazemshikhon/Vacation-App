import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';

import colors from '../config/colors';

const Card = ({ data }) => {
  const { name, replacementName, mobile, startDate, requestDays } = data;
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.dateText}>{moment(startDate).format('MMMM D,YYYY')}</Text>

        <View style={styles.daysContainer}>
          <Text style={styles.daysText}>{requestDays} DAYS</Text>
        </View>
      </View>
      <Text style={styles.mainText}>{name}</Text>
      <Text style={styles.mainText}>{mobile}</Text>

      <Text style={styles.replacmentNameText}>{replacementName}</Text>
    </View>
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
    fontSize: 19,
  },
  daysText: {
    color: colors.darkYellow,
    fontSize: 12,
    fontWeight: 'bold',
  },
  mainText: {
    color: colors.dark,
    marginBottom: 4,
    fontSize: 15,
  },
  replacmentNameText: {
    color: colors.red,
    fontSize: 15,
    marginBottom: 4,
  },
});
