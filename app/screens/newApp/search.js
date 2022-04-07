import React from 'react';
import { StyleSheet, View, Image, Dimensions, Text, TextInput } from 'react-native';
import colors from '../../config/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import fonts from '../../config/fonts';

const { width } = Dimensions.get('screen');

const Search = ({}) => {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '#3bc187', padding: 8, borderRadius: 8 }}>
        <Image source={require('../../config/images/filter.png')} style={{ width: responsiveWidth(6), height: responsiveWidth(6), tintColor: colors.white }} />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput style={{ fontFamily: fonts.AR }} placeholder={'ابحث عن محامي'} placeholderTextColor={'#92a6af'} />
        <MaterialIcons name={'search'} size={22} style={{ color: '#92a6af', marginLeft: 4 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'space-between',
    elevation: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    position: 'absolute',
    top: -30,
    left: 16,
  },
});

export default Search;
