import {StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingLeft: wp(5),
    paddingRight: wp(5),
    backgroundColor: 'white',
  },
  Backarow: {
    paddingLeft: wp(2),
    flexDirection: 'row',
    marginTop: hp(4),
  },
  Heading: {
    paddingLeft: wp(1),
    marginTop: hp(4),

    marginBottom: hp(1),
  },
  Headingtext: {
    fontSize: wp(4),
    fontWeight: '600',
    color: '#2E3E5C',
  },
  Heading2: {
    flexDirection: 'row',
    marginBottom: hp(2),
  },
  Heading2text1: {
    fontWeight: '600',
    fontSize: wp(6),
    color: '#0E99E7',
    marginRight: wp(52),
  },
  Heading2text2: {
    color: '#9FA5C0',
    fontWeight: '500',
    fontSize: wp(5),
  },
  categryimg: {
    width: wp(90),
  },
  styletextview: {
    marginTop: hp(2),
  },

  styletext1: {
    fontWeight: '400',
    fontSize: wp(4.5),
    color: '#9FA5C0',
  },
  styleticketview: {
    borderWidth: wp(0.5),
    borderColor: '#F2F7FB',
    borderRadius: 20,
    flexDirection: 'row',
    marginTop: hp(2),
    backgroundColor: '#F2F7FB',
  },
  styleticketview2: {
    marginTop: hp(3),
    marginLeft: wp(5),
    marginBottom: hp(3),
  },
  styleticket: {
    fontWeight: '600',
    fontSize: wp(6),
    color: '#2E3E5C',
  },
  styletickettext: {
    fontWeight: '400',
    fontSize: wp(3.5),
    color: '#9FA5C0',
  },
  dolrimg: {
    marginTop: hp(4),
    marginLeft: wp(6),
    marginBottom: hp(3),
  },
  box: {
    marginTop: hp(2),
    marginLeft: wp(5),
    borderWidth: 1,
    borderRadius: 10,
  },
  boximg: {
    marginLeft: wp(12),
    marginRight: wp(12),
    marginTop: hp(5),
    marginBottom: hp(5),
  },
  itemname: {
    marginLeft: wp(5),
    marginTop: hp(1),
  },

  btnview: {
    flexDirection: 'row',

    
    marginLeft: wp(50),
    marginTop: hp(8),
    borderRadius: 10,
    marginRight: wp(5),
  },
  btntext: {
    color: 'white',
    fontSize: wp(5),
    marginTop: hp(2),
    marginBottom: hp(2),
    marginLeft: wp(3),
    fontWeight: '700',
  },
  arrowimg: {
    marginTop: hp(3),
    marginLeft: wp(6),

    width: 25,
  },
});
