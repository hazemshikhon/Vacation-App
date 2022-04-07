import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import colors from '../../config/colors';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
const { width, height } = Dimensions.get('screen');
import StarRating from 'react-native-star-rating';
import fonts from '../../config/fonts';
const LawyerCard = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.lawyerImageView}>
        <Image source={require('../../config/images/person.jpg')} style={styles.lawyerImage} />
      </View>
      <View style={styles.priceView}>
        <Text style={styles.priceText}>1500</Text>
        <Text style={styles.currencyText}>جنيه</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.lawyerName}>أ / أحمد محمود السيد</Text>
        <Text style={styles.lawyerDescription}>محامي بالنقض والتحكيم الدولي</Text>
        <View style={styles.ratingView}>
          <Text style={styles.numRating}>4.00 (120)</Text>
          <StarRating disabled={false} maxStars={5} rating={4} reversed fullStarColor={'#ecc266'} starSize={15} buttonStyle={{ margin: 3 }} />
        </View>
        <View style={styles.casesHistory}>
          <View style={{ backgroundColor: '#fcf0f3', alignItems: 'center', padding: 18, borderRadius: 10, paddingHorizontal: 28 }}>
            <Text style={{ color: '#dc476f', fontWeight: 'bold', fontSize: responsiveFontSize(2.1), marginBottom: 3, fontFamily: 'Almarai-Bold' }}>10</Text>
            <Text style={{ color: '#dc476f', fontSize: responsiveFontSize(2), fontFamily: fonts.AR }}>القضايا الخاسرة</Text>
          </View>
          <View style={{ backgroundColor: '#effbf5', alignItems: 'center', padding: 18, borderRadius: 10, paddingHorizontal: 28 }}>
            <Text style={{ color: '#3bc187', fontWeight: 'bold', fontSize: responsiveFontSize(2.1), fontFamily: fonts.AB, marginBottom: 3 }}>200</Text>
            <Text style={{ color: '#3bc187', fontSize: responsiveFontSize(2), fontFamily: fonts.AR }}>القضايا الناجحة</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.requestLawyer}>
          <Text style={{ textAlign: 'center', fontSize: responsiveFontSize(2.2), color: colors.white, fontWeight: 'bold', fontFamily: fonts.AB }}>
            طلب المحامي في قضية
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default LawyerCard;

const styles = StyleSheet.create({
  container: {
    shadowColor: '#cccccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: colors.light,
    borderRadius: 12,
    marginBottom: 100,
  },
  lawyerImageView: {
    position: 'absolute',
    top: -40,
    right: 20,
  },
  lawyerImage: {
    width: responsiveWidth(20),
    height: responsiveWidth(20),
    borderRadius: 40,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  priceView: {
    paddingHorizontal: 15,
    marginTop: 10,
  },
  priceText: {
    fontSize: responsiveFontSize(2.5),
    color: '#40c38a',
    fontWeight: 'bold',
    fontFamily: fonts.AB,
  },
  currencyText: {
    fontSize: responsiveFontSize(2.1),
    fontWeight: 'bold',
    fontFamily: fonts.AB,
  },
  subContainer: {
    alignItems: 'flex-end',
    paddingHorizontal: 15,
  },
  lawyerName: {
    fontSize: responsiveFontSize(2),
    fontFamily: fonts.AR,
  },
  lawyerDescription: {
    fontSize: responsiveFontSize(2),
    color: '#92a6af',
    marginVertical: 8,
    fontFamily: fonts.AR,
  },
  ratingView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numRating: {
    color: '#92a5af',
    fontSize: responsiveFontSize(1.8),
    marginRight: 8,
    fontFamily: fonts.AR,
  },
  casesHistory: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 8,
    marginBottom: 40,
  },
  requestLawyer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    width: '100%',
    backgroundColor: colors.primary,
    borderRadius: 13,
    padding: 12,
    position: 'absolute',
    bottom: -28,
    alignSelf: 'center',
  },
});
