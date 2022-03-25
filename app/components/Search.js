import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/colors';

const Search = ({ search }) => {
  const [searchText, setSearchText] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={'Search'}
        placeholderTextColor={colors.gray}
        value={searchText}
        onChangeText={(text) => {
          setSearchText(text);
          search(text);
        }}
      />
      {searchText == '' && <MaterialIcons name={'search'} size={22} style={styles.icon} />}
      {searchText !== '' && (
        <MaterialCommunityIcons
          name={'close-circle'}
          size={22}
          onPress={() => {
            setSearchText('');
            search('');
          }}
          style={styles.icon}
        />
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 16,
    padding: 8,
    borderRadius: 8,
    backgroundColor: colors.white,
    flexDirection: 'row',
    shadowColor: colors.black,
    elevation: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  textInput: {
    padding: 0,
    width: '90%',
  },
  icon: {
    color: colors.gray,
    alignSelf: 'center',
    marginRight: 3,
  },
});
