import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingLeft:wp(4),
    paddingRight: wp(5),
    backgroundColor:'#FDFDFE',
  },
  modalstyle: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  modalstyle1: {
    backgroundColor: '#ffffff',
    marginTop: hp(30),
    marginBottom: hp(30),
    marginLeft: wp(10),
    marginRight: wp(10),
    borderRadius: 20,
    flex: 1,
  },
  img: {
    marginTop: hp(1),

    alignSelf: 'center',
  },
  tickimg: {
    height: wp(24),
    width: hp(11),
    marginBottom: hp(3),
  },
  modalheading: {
    alignItems: 'center',
  },
  modalheading1: {
    fontWeight: '700',
    color: '#2E3E5C',
    fontSize: wp(6),
  },
  modalbtnview: {
    marginTop: hp(5),
    borderRadius: hp(1),
    backgroundColor: '#0E99E7',
  },
  modalbtntext: {
    fontSize: hp(2),
    marginTop: hp(2),
    marginBottom: hp(2),
    color: 'white',
    fontWeight: '600',
    alignSelf: 'center',
  },

  Heading: {
    marginTop: hp(8),
    marginLeft: wp(1),
    marginBottom: hp(1),
  },
  Headingtext: {
    fontSize: wp(6),
    fontWeight: '600',
    color: '#2E3E5C',
  },
  Headingtext2: {
    color: '#9FA5C0',
    fontWeight: '400',
  },
  inputbox: {
    marginTop: hp(3),
    borderRadius: hp(1),
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#D0DBEA',
  },
  username: {
    width: wp(70),
    marginTop: hp(0.5),
    marginBottom: hp(0.5),
    color: '#2E3E5C',
    fontWeight: '400',
    marginLeft: hp(2),
    fontSize: wp(4.5),
  },
  Btnview: {
    marginTop: hp(7),
    borderRadius: hp(1),
    alignItems: 'center',
    backgroundColor: '#0E99E7',

    marginTop: hp(27),
  },
  btntext: {
    fontSize: hp(2),
    marginTop: hp(2.5),
    marginBottom: hp(2.5),
    color: 'white',
    fontWeight: '600',
  },
  eventstrt: {
    flexDirection: 'row',
    marginTop: hp(3),
  },
  eventstrtinput: {
    width: wp(67),
    borderRadius: hp(1),
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#D0DBEA',
  },
  eventstrttext: {
    marginTop: hp(2.5),
    marginRight: wp(5),
    color: '#9FA5C0',
  },
  eventend: {
    flexDirection: 'row',
    marginTop: hp(3),
  },
  eventendtext: {
    marginTop: hp(2.5),
    marginRight: wp(6.5),
    color: '#9FA5C0',
  },
  eventenddate: {
    height: hp(7),
    width: wp(67),
    borderRadius: hp(1),
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#D0DBEA',
  },
  eventendyearstyle: {
    color: '#0E99E7',
    fontWeight: '600',
    fontSize: wp(5),
    marginLeft: wp(4),
    marginTop: hp(1),
  },
  eventendtimestyle: {
    color: '#0E99E7',
    fontWeight: '600',
    fontSize: wp(5),
    marginLeft: wp(2),
    marginTop: hp(1),
  },
 
});
