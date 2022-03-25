import React from 'react';
import { StyleSheet, Platform, View, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';
import Container from '../components/Container';
import colors from '../config/colors';
import AppTextInput from '../components/AppTextInput';
import DatePicker from '../components/DatePicker';

const CreateVacation = ({
  pickerStartDate,
  startDate,
  name,
  replacementName,
  phone,
  requestedDays,
  errName,
  errReplacementName,
  errRequestedDays,
  errDate,
  setPickerStartDate,
  setStartDate,
  setName,
  setReplacementName,
  setPhone,
  setRequestedDays,
  setErrName,
  setErrReplacementName,
  setErrRequestedDays,
  setErrDate,
  errPhone,
  setErrPhone,
  submit,
}) => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  return (
    <Container scrollView>
      <Text style={styles.headerText}>Vacation Request</Text>
      <AppTextInput
        title={'Enter Your Name'}
        placeholder={'Name'}
        mandatory
        err={errName}
        value={name}
        onChangeText={(text) => {
          setName(text);
        }}
      />
      <AppTextInput
        title={'Enter Replacement Name'}
        mandatory
        placeholder={'Replacement Name'}
        err={errReplacementName}
        value={replacementName}
        onChangeText={(text) => {
          setReplacementName(text);
        }}
      />

      <AppTextInput
        title={'Number Of Requested Days'}
        mandatory
        placeholder={'Requested Days'}
        keyboardType="numeric"
        value={requestedDays}
        err={errRequestedDays}
        onChangeText={(number) => {
          const regex = /[0-9]/;
          setRequestedDays(number);
          if (!regex.test(number)) {
            setErrRequestedDays('Please Enter Numbers Only');
          } else {
            setErrRequestedDays('');
          }
        }}
      />

      <View style={styles.dateContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.titleText}>Choose Start Date</Text>
          <Text style={styles.mandatory}> *</Text>
        </View>
        <TouchableOpacity style={styles.inputText} onPress={() => setPickerStartDate(true)}>
          <Text style={styles.date}>{startDate ? moment(startDate).format('DD/MM/YYYY') : 'DD/MM/YYYY'}</Text>
        </TouchableOpacity>
        {errDate != undefined && <Text style={styles.error}>{errDate}</Text>}
      </View>

      <AppTextInput
        title={'Enter Your Phone Number'}
        placeholder={'Phone Number'}
        keyboardType="phone-pad"
        value={phone}
        err={errPhone}
        onChangeText={(number) => {
          setPhone(number);
        }}
      />

      <TouchableOpacity
        onPress={() => {
          setErrName('');
          setErrReplacementName('');
          setErrRequestedDays('');
          setErrDate('');
          setErrPhone('');
          submit();
        }}
        style={styles.submitButton}>
        <Text style={styles.submitText}> Submit </Text>
      </TouchableOpacity>

      <DatePicker
        visible={pickerStartDate}
        date={startDate}
        onConfirm={(date) => {
          setPickerStartDate(false);
          setStartDate(date);
        }}
        minimumDate={tomorrow}
        onCancel={() => {
          setPickerStartDate(false);
        }}
      />
    </Container>
  );
};

export default CreateVacation;
const styles = StyleSheet.create({
  headerText: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#5d9edf',
    marginBottom: 18,
  },
  dateContainer: {
    marginBottom: 16,
  },
  titleText: {
    fontSize: 16,
    marginBottom: 8,
    color: colors.dark,
  },
  mandatory: {
    fontSize: 19,
    color: colors.red,
  },
  inputText: {
    borderRadius: 8,
    padding: Platform.OS === 'android' ? 0 : 12,
    borderWidth: 1,
    borderColor: colors.light,
    marginBottom: 12,
  },
  date: {
    fontSize: 14,
    color: colors.dark,
  },
  error: {
    color: colors.red,
  },
  submitButton: {
    borderRadius: 8,
    backgroundColor: colors.primary,
    width: '100%',
    padding: 13,
  },
  submitText: {
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
    color: colors.white,
  },
});
