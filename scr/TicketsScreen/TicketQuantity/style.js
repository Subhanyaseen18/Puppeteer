import {StyleSheet} from 'react-native';
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
    marginRight: wp(59),
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
  boximg: {
    flexDirection: 'row',
    marginTop: hp(3),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#D0DBEA',
  },
  box1img1: {
    marginLeft: wp(7),
    marginRight: wp(3),
    marginTop: hp(1.5),
    marginBottom: hp(1.5),
    tintColor: '#D0DBEA',
    height: hp(3),
    width: wp(7),
  },
  box1text: {
    fontSize: wp(4.2),
    marginTop: hp(1.1),
    fontWeight: '500',
    color: '#D0DBEA',
    marginLeft:wp(18),
    position:'absolute'
  },
  inputview: {
    borderColor: '#D0DBEA',
    borderRadius: 10,
    borderWidth: 1,
 marginBottom:hp(10),
 marginTop:hp(3)
  },
  inputtext: {
   marginLeft:wp(3),
    width: wp(55),
    fontSize: wp(4),
    fontWeight: '500',
    color: '#9FA5C0',
    marginTop: hp(1),
    marginBottom: hp(1),

  },
  box1img2:{
    position:'absolute',
    marginTop:hp(2),
    marginLeft:wp(65),
    alignItems:'flex-end'
  },btnview: {
    flexDirection: 'row',
    backgroundColor: '#0E99E7',
    borderColor: '#0E99E7',
    borderWidth: wp(1),
    marginLeft: wp(50),
    borderRadius: 10,
    marginRight: wp(5),
    marginBottom:hp(3)
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
