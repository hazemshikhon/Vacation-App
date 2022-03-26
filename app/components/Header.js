import React from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import colors from '../config/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('screen');

const Header = ({ backButton, navigation }) => {
  return (
    <View style={styles.container}>
      {backButton && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name={'arrow-back'} size={25} color={colors.white} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: colors.white,
  },
  emptyView: {
    flex: 1,
  },
  container: {
    backgroundColor: colors.primary,
    width: width,
    padding: 10,
    paddingHorizontal: 13,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Header;
