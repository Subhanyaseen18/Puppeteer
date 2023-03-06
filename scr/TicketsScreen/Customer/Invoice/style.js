import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,

    paddingRight: wp(5),
  },
  Backarow: {
    paddingLeft: wp(3),
    flexDirection: 'row',
    marginTop: hp(4),
    marginLeft: wp(5),
  },

  Heading: {
    paddingLeft: wp(3),
    marginTop: hp(3),
    marginLeft: wp(5),
    marginBottom: hp(1),
  },
  Headingtext: {
    fontSize: wp(6),
    fontWeight: '600',
    color: '#2E3E5C',
  },
  Btnview: {
    marginTop: hp(3),
    borderRadius: hp(1),
    alignItems: 'center',
    backgroundColor: '#0E99E7',
    marginLeft: wp(5),
  },

  btntext: {
    fontSize: hp(2),
    marginTop: hp(2.5),
    marginBottom: hp(2.5),
    color: 'white',
    fontWeight: 'bold',
  },
  box1: {
    marginTop: hp(3),
    borderColor: '#D0DBEA',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    marginLeft: wp(5),
  },
  box1text: {
    marginLeft: wp(5),
    color: '#9FA5C0',
    fontWeight: '500',
    fontSize: wp(4.5),
    width: wp(50),
    marginTop: hp(1.5),
    marginBottom: hp(1.5),
  },
  inputbox: {
    marginTop: hp(3),
    borderRadius: hp(1),
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#D0DBEA',
    marginLeft: wp(5),
  },
  imgusername: {
    position: 'absolute',
    marginTop: hp(2.2),
    marginLeft: wp(57),
  },
  stylegndr: {
    width: wp(50),
    marginLeft: wp(5),
    color: '#2E3E5C',
    fontWeight: '500',
    fontSize: wp(4.5),
    marginTop: hp(1.5),
    marginBottom: hp(1.5),
    color: '#9FA5C0',
  },
  eventendyearstyle: {
    color: '#0E99E7',
    fontWeight: '600',
    fontSize: wp(5),
    marginLeft: wp(23),
    marginTop: hp(1.5),
    marginBottom: hp(1.5),
  },
  paymentdate: {
    color: '#9FA5C0',
    fontWeight: '600',
    fontSize: wp(4.5),
    marginTop: hp(1.5),
    marginLeft: wp(5),
  },
  cash: {
    fontWeight: '600',
    fontSize: wp(4.5),
    marginTop: hp(1.5),
    marginLeft: wp(2),
  },
  type: {
    fontWeight: '600',
    fontSize: wp(4.5),
    marginTop: hp(1.5),
    color: '#0E99E7',
    marginLeft: wp(12),
  },
  showview: {
    marginTop: hp(2.5),
    marginLeft: wp(11),
    marginBottom: hp(2.5),
  },
  showtext: {
    fontWeight: '400',
    fontSize: wp(3.5),
  },
  imgline: {
    height: hp(0.1),
    paddingLeft: wp(15),
    marginBottom: hp(7),
    marginTop:hp(26)
  },
  totalview: {
    marginLeft: wp(11),
    flexDirection: 'row',
    position: 'absolute',
    marginTop: hp(78),
  },
  totaltext: {
    fontWeight: '600',
    fontSize: wp(4.5),
    marginRight: wp(58),
  },
  totaltext2: {
    fontWeight: '600',
    fontSize: wp(4.5),
  },
  data1: {
    flexDirection: 'row',
    marginLeft: wp(11),
    position: 'absolute',
    marginTop: hp(48),
  },
  data1text: {
    fontWeight: '500',
    fontSize: wp(4.5),
    marginRight: wp(58),
    position: 'absolute',
    color:'#9FA5C0'
  },
  data1text2: {
    fontWeight: '500',
    fontSize: wp(4),
    position: 'absolute',
    marginLeft: wp(64),
    color:'#9FA5C0'
  },
  data2:{
    flexDirection: 'row',
    marginLeft: wp(11),
    position: 'absolute',
    marginTop: hp(52),
  }, data3:{
    flexDirection: 'row',
    marginLeft: wp(11),
    position: 'absolute',
    marginTop: hp(56),
  }, data4:{
    flexDirection: 'row',
    marginLeft: wp(11),
    position: 'absolute',
    marginTop: hp(60),
  }, data5:{
    flexDirection: 'row',
    marginLeft: wp(11),
    position: 'absolute',
    marginTop: hp(64),
  }
});
