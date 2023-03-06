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
    paddingLeft: wp(5),
    flexDirection: 'row',
    marginTop: hp(4),
    marginLeft: wp(1),
  },
  Imgaddevent: {
    marginRight: wp(5),
  },
  Heading: {
    paddingLeft: wp(5),
    marginTop: hp(5),
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
  styleprice:{
    paddingLeft: wp(5),
    flexDirection:'row',
    marginTop:hp(3)
  },
  dolrpriceshow:{
    fontWeight:'600',
    color: '#2E3E5C',
    marginRight:wp(80)
  },
  ticketshow:{
    fontWeight:'600',
    color: '#2E3E5C',
  },
  styledolr:{
    flexDirection:'row',
    paddingLeft: wp(5),
    marginBottom:hp(4)
  },
  dolrpricetext:{
    fontWeight: '400',
    color: '#9FA5C0',
    marginRight:wp(25)
  },
  tickettext:{
    fontWeight: '400',
    color: '#9FA5C0',
  },
  imgticketlogo: {
    alignItems: 'center',
    marginTop: hp(10),
  },
  tickettext:{
    alignItems:"center"
  },
  tickettext1:{
    marginTop:hp(2),
    color:"#2E3E5C",
    fontSize:wp(6),
    fontWeight:'500',
    marginBottom:hp(1)
  }, Btnview: {
    marginTop: hp(7),
    borderRadius: hp(1),
    alignItems: 'center',
   borderRadius:10,
   backgroundColor:"#0E99E7",
   marginLeft:wp(5)
  },

  btntext: {
    fontSize: hp(2),
    marginTop: hp(2.5),
    marginBottom: hp(2.5),
    color: 'white',
    fontWeight:'bold'
  },

})