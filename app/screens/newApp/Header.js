import React from 'react';
import { StyleSheet, View, Image, Dimensions, Text } from 'react-native';
import colors from '../../config/colors';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import fonts from '../../config/fonts';
const { width } = Dimensions.get('screen');

const Header = ({}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../config/images/bell.png')} style={styles.icon} />
      <Text style={styles.title}>المحامين</Text>
      <Image source={require('../../config/images/logo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontSize: responsiveFontSize(2.2),
    fontFamily: fonts.AB,
  },
  logo: {
    width: responsiveWidth(15),
    height: responsiveWidth(15),
  },
  icon: {
    tintColor: colors.white,
    width: responsiveWidth(7),
    height: responsiveWidth(7),
  },
  container: {
    backgroundColor: colors.primary,
    width: width,
    padding: 10,
    paddingHorizontal: 13,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    paddingBottom: 50,
    justifyContent: 'space-between',
  },
});

export default Header;
