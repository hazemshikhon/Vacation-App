import React from 'react';
import { View, Text } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
function RowText({ textOne, textTwo, textOneStyle, textTwoStyle, Style }) {
  return (
    <View style={[{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 18 }, Style]}>
      <Text style={[{ fontSize: responsiveFontSize(2.1), textAlign: 'center' }, textOneStyle]}>{textOne}</Text>
      <Text style={[{ flex: 1, fontSize: responsiveFontSize(2.3), textAlign: 'right' }, textTwoStyle]}>{textTwo}</Text>
    </View>
  );
}

export default RowText;
