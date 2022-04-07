import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Container from './Container';
import colors from '../../config/colors';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import Search from './search';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LawyerCard from './lawyerCard';
import fonts from '../../config/fonts';

const NewHome = ({}) => {
  return (
    <Container>
      <Search />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        <View style={styles.headerView}>
          <View style={styles.sortView}>
            <MaterialIcons name="keyboard-arrow-down" size={20} color={'#adb2c7'} />
            <Text style={styles.sortText}>ترتيب حسب</Text>
          </View>
          <Text style={styles.lawyerListText}>قائمة المحامين</Text>
        </View>
        <LawyerCard />
        <LawyerCard />
      </ScrollView>
    </Container>
  );
};
export default NewHome;

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 1,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    alignItems: 'center',
    marginBottom: 55,
  },
  sortView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#adb2c7',
    padding: 8,
  },
  sortText: {
    color: '#adb2c7',
    marginLeft: 7,
    fontFamily: fonts.AR,
  },
  lawyerListText: {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2),
    fontFamily: fonts.AR,
  },
});
