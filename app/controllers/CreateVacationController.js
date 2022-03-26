import moment from 'moment';
import React, { useState } from 'react';
import { baseUrl } from '../config/constants';
import CreateVacation from '../screens/CreateVacation';
import { Alert } from 'react-native';
import store from '../config/store';
const CreateVacationController = ({ navigation }) => {
  const [pickerStartDate, setPickerStartDate] = useState(false);
  const [startDate, setStartDate] = useState();
  const [errName, setErrName] = useState('');
  const [errReplacementName, setErrReplacementName] = useState('');
  const [errRequestedDays, setErrRequestedDays] = useState('');
  const [errDate, setErrDate] = useState('');
  const [errPhone, setErrPhone] = useState('');
  const [name, setName] = useState('');
  const [replacementName, setReplacementName] = useState('');
  const [phone, setPhone] = useState('');
  const [requestedDays, setRequestedDays] = useState('');
  const Submit = async () => {
    const phoneReg = /^01[0125][0-9]{8}$/;

    if (
      name === '' ||
      replacementName === '' ||
      requestedDays === '' ||
      startDate === undefined ||
      errRequestedDays !== '' ||
      (phone !== '' && !phoneReg.test(phone))
    ) {
      if (name === '') {
        setErrName('Please Enter Name');
      }
      if (replacementName === '') {
        setErrReplacementName('Please Enter Replacement Name');
      }
      if (requestedDays === '') {
        setErrRequestedDays('Please Enter Requested Days');
      }
      if (startDate === undefined) {
        setErrDate('Please Select Date');
      }
      if (!phoneReg.test(phone)) {
        setErrPhone('Please Enter Valid Phone Number');
      }
    } else {
      await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          replacementName,
          mobile: phone,
          startDate: moment(startDate).format(),
          requestDays: requestedDays,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.name !== name && res.replacementName !== replacementName) {
            Alert.alert('Something went wrong', 'Please check data and try again', [{ text: 'OK', onPress: () => {} }]);
          } else {
            store.dispatch({
              type: 'addDay',
              payload: {
                id: 0,
                numberDays: requestedDays,
              },
            });
            navigation.push('Home');
          }
        })
        .catch((error) => console.log('error', error));
    }
  };
  return (
    <CreateVacation
      pickerStartDate={pickerStartDate}
      setPickerStartDate={(pickerStartDate) => setPickerStartDate(pickerStartDate)}
      startDate={startDate}
      setStartDate={(startDate) => setStartDate(startDate)}
      name={name}
      setName={(name) => setName(name)}
      replacementName={replacementName}
      setReplacementName={(replacementName) => setReplacementName(replacementName)}
      phone={phone}
      setPhone={(phone) => setPhone(phone)}
      requestedDays={requestedDays}
      setRequestedDays={(requestedDays) => setRequestedDays(requestedDays)}
      errName={errName}
      setErrName={(errName) => setErrName(errName)}
      errReplacementName={errReplacementName}
      setErrReplacementName={(errReplacementName) => setErrReplacementName(errReplacementName)}
      errRequestedDays={errRequestedDays}
      setErrRequestedDays={(errRequestedDays) => setErrRequestedDays(errRequestedDays)}
      errDate={errDate}
      setErrDate={(errDate) => setErrDate(errDate)}
      errPhone={errPhone}
      setErrPhone={(errPhone) => setErrPhone(errPhone)}
      submit={Submit}
      navigation={navigation}
    />
  );
};

export default CreateVacationController;
