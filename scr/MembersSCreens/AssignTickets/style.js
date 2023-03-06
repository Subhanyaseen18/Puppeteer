import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingLeft:wp(5),
    paddingRight: wp(5),
  },
  Backarow: {
    paddingLeft: wp(3),
    flexDirection: 'row',
    marginTop: hp(4),
   
  },
  Imgaddevent: {
    marginRight: wp(5),
  },
  Heading: {
    paddingLeft: wp(3),
    marginTop: hp(4),
  
    marginBottom: hp(1),
  },
  Headingtext: {
    fontSize: wp(6),
    fontWeight: '600',
    color: '#2E3E5C',
  },Btnview: {
    marginTop: hp(65),
    borderRadius: hp(1),
    alignItems: 'center',
    backgroundColor: '#0E99E7',
  },

  btntext: {
    fontSize: hp(2),
    marginTop: hp(2.5),
    marginBottom: hp(2.5),
    color: 'white',
    fontWeight:'bold'
  },
 
})