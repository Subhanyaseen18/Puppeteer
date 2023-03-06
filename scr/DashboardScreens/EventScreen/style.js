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
  },
  Backarow: {
    flexDirection: 'row',
    marginTop: hp(4),
    marginLeft: wp(1),
  },
  Imgaddevent: {
    marginRight: wp(5),
  },
  Heading: {
    marginTop:hp(1),
    marginLeft: wp(4),
    marginBottom:hp(1)
  },
  Headingtext: {
    fontSize: wp(5),
    fontWeight: '600',
    color: '#2E3E5C',
  },
  imgsearch: {
    marginTop: hp(2.2),
    marginLeft: wp(2),
    marginRight: hp(1),
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
    fontWeight: '500',
  },
  imgeventlogo: {
    alignItems: 'center',
    marginTop: hp(10),
  },
  eventtext:{
    alignItems:"center"
  },
  eventtext1:{
    marginTop:hp(3),
    color:"#2E3E5C",
    fontSize:wp(6),
    fontWeight:'500',
    marginBottom:hp(1)
  },
  eventtext2:{
    fontWeight:'400',
    color:'#9FA5C0',
    fontSize:wp(4)
  }
});
