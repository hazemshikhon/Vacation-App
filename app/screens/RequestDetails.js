import React from 'react';
import Container from '../components/Container';
import RowText from '../components/RowText';
import moment from 'moment';
import { Text, StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

import colors from '../config/colors';
const RequestDetails = ({ data }) => {
  const { name, replacementName, mobile, startDate, requestDays } = data;

  return (
    <Container backButton>
      <Text style={styles.headerText}>Request Details</Text>
      <RowText textOne={'Name Requster :'} textTwo={name} textOneStyle={{ color: colors.red }} textTwoStyle={{ color: colors.dark }} />
      <RowText textOne={'Replacement Name :'} textTwo={replacementName} textOneStyle={{ color: colors.red }} textTwoStyle={{ color: colors.dark }} />
      <RowText textOne={'Mobile Number :'} textTwo={mobile} textOneStyle={{ color: colors.red }} textTwoStyle={{ color: colors.dark }} />
      <RowText
        textOne={'Start Date :'}
        textTwo={moment(startDate).format('MMMM D,YYYY')}
        textOneStyle={{ color: colors.red }}
        textTwoStyle={{ color: colors.dark }}
      />
      <RowText textOne={'Requested Days :'} textTwo={requestDays + ' Days'} textOneStyle={{ color: colors.red }} textTwoStyle={{ color: colors.dark }} />
    </Container>
  );
};

export default RequestDetails;
const styles = StyleSheet.create({
  headerText: {
    fontSize: responsiveFontSize(3.5),
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 22,
  },
});
