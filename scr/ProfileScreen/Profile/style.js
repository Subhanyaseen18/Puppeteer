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
    paddingLeft: wp(80),
   
    marginTop: hp(4),
    marginLeft: wp(1),
  },
  Imgaddevent: {
    marginRight: wp(5),
  },
  heading:{
    alignSelf:'center'
  },
  headingtext1:{
    fontWeight:'600',
    fontSize:wp(7)
  },
  Imgprofilepic:{
    marginTop:hp(3),
    marginBottom:wp(3)
  },
  stylehost:{
    marginTop:hp(2),
    borderRadius:10,
    alignSelf:'center',
    backgroundColor:'#22A516'
  },
  stylehosttext:{
    marginLeft:wp(7),
    marginRight:wp(7),
    marginTop:hp(1),
    marginBottom:hp(1),
    fontWeight:'500',

  },
  emailview: {
    marginTop: hp(3),
    borderRadius: hp(1),
   flexDirection:"row",
   alignItems:'center',
  },
  styleemailtext:{
    
    marginTop:hp(2),
    marginBottom:hp(0.5),
    color:'#9FA5C0',
     fontWeight:'500'

  },
  imgmail:{
    marginTop:hp(2.2),
    marginLeft:wp(10),
    marginRight:hp(1)
   },
   btntouch: {
    flexDirection: 'row',

    backgroundColor:'#FF6464',
    marginLeft: wp(5),
    
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
    marginRight:wp(3)
  },
  arrowimg: {
    marginTop: hp(2.3),
    marginLeft: wp(6),

    width: 25,
  },
  btnview:{
    alignItems:'center',
    marginTop:hp(8)
  }
})