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
    marginTop: hp(8),
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
  box1:{
    marginTop:hp(4),
    borderColor:'#D0DBEA',
    borderWidth:1,
    borderRadius:10
    
  },
  box1text:{
    marginLeft:wp(5),
    color:'#9FA5C0',
    fontWeight:'500',
    fontSize:wp(4.5)
  },
  inputbox: {
    marginTop: hp(3),
    borderRadius: hp(1),
   flexDirection:"row",
    borderWidth: 1,
    borderColor: '#D0DBEA',
  },
  imgusername:{
    position:'absolute',
    marginTop:hp(2.2),
    marginLeft:wp(57),
  
   },
   stylegndr:{
    width:wp(20),
    marginLeft:wp(5),
    color:'#2E3E5C',
     fontWeight:'500',
     fontSize:wp(4.5)
  },
  stylegndrtext:{
    marginTop:hp(1.7),
    marginLeft:wp(48),
    color:'#0E99E7',
    fontWeight:'500',
    fontSize:wp(4),
     position: 'absolute',
  },
  modalstyle: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  modalstyle1: {
    backgroundColor: '#ffffff',
    margin: 25,
   
    borderRadius: 10,
    flex: 1,
  },
  
 
})