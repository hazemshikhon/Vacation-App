import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';

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
    padding: Platform.OS === 'android' ? 0 : 12,
    borderWidth: 1,
    borderColor: colors.light,
    marginBottom: 12,
    flexDirection: 'row',
    fontSize: 15,
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
});
