import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor:'white',
    paddingRight: wp(5),
  },addview:{
marginTop:hp(4),
marginLeft:wp(85)
  },
 
  Imgaddevent: {
    marginRight: wp(5),
  },
  Heading: {
    paddingLeft: wp(5),
    marginTop: hp(2),
    marginLeft: wp(2),
    marginBottom: hp(6),
  },
  Headingtext: {
    fontSize: wp(6),
    fontWeight: '600',
    color: '#2E3E5C',
  },btnview1:{
    marginRight:wp(5),
    backgroundColor:"#0E99E7",
    borderRadius:10,
    marginLeft:wp(5),
    borderRadius:50,

  },
  btntext1:{
    marginLeft:wp(18),
    marginRight:wp(18),
    marginTop:hp(2),
    marginBottom:hp(2),
    
  },
  btnview2:{
    
    backgroundColor:"#0E99E7",
    borderRadius:50,
    marginLeft:wp(5),
    
  },
  btntext2:{
    marginLeft:wp(12),
    marginRight:wp(12),
    marginTop:hp(2),
    marginBottom:hp(2),
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
  },
})