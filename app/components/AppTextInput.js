import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

import colors from '../config/colors';

const AppTextInput = ({ title, mandatory, err, ...otherProps }) => {
  return (
    <View style={[{ flexDirection: 'column', marginBottom: 16 }]}>
      <View style={[{ flexDirection: 'row' }]}>
        <Text style={[styles.titleText]}>{title}</Text>
        {mandatory && <Text style={[styles.mandatory]}> *</Text>}
      </View>
      <TextInput style={styles.inputText} underlineColorAndroid="transparent" placeholderTextColor={colors.gray} {...otherProps} />
      {err !== '' && <Text style={{ color: colors.red }}>{err}</Text>}
    </View>
  );
};

export default AppTextInput;
const styles = StyleSheet.create({
  inputText: {
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.light,
    marginBottom: 12,
    flexDirection: 'row',
    fontSize: responsiveFontSize(2),
  },

  titleText: {
    fontSize: responsiveFontSize(2.1),
    marginBottom: 8,
    color: colors.dark,
  },
  mandatory: {
    fontSize: responsiveFontSize(2.2),
    color: colors.red,
  },
});
