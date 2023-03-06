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
  heading: {
    marginTop: hp(5),
   
  },
  heading1: {
    fontSize: hp(2.7),
    color: '#2E3E5C',
    fontWeight:'600',
    marginBottom:hp(1)
  },
  heading2:{
  fontWeight:'400',
  color:'#9FA5C0'
  },
  inputbox: {
    marginTop: hp(5),
    borderRadius: hp(1),
   flexDirection:"row",
    borderWidth: 1,
    borderColor: '#D0DBEA',
    backgroundColor:'#F5F5F5',
  },
  username:{
    width:wp(70),
   marginTop:hp(0.5),
   marginBottom:hp(0.5),
   color:'#2E3E5C',
    fontWeight:'500'

  },
  useremail:{
    width:wp(70),
    marginTop:hp(0.5),
    marginBottom:hp(0.5),
    color:'#2E3E5C',
     fontWeight:'500'

  },
  
  Btnview: {
    marginTop: hp(7),
    borderRadius: hp(1),
    alignItems: 'center',
    backgroundColor: '#0E99E7',
  },
  btntext: {
    fontSize: hp(2),
    marginTop:hp(2.5),
    marginBottom:hp(2.5)
    ,color:'white',
    fontWeight:'600'
  },
  
  imgusername:{
   marginTop:hp(2),
   marginLeft:wp(3),
   marginRight:hp(1)
  },
  backarow: {
    marginTop: hp(3),
    marginLeft: wp(2),
  },
  
  toucharowimg:{
    marginRight:wp(80)
  },
  arowimg:{
    tintColor:"#2E3E5C"
  },modalstyle: {
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
  img:{
    marginTop:hp(2),
   
  alignSelf:'center'
  
  },
  tickimg: {
   
    height:wp(22),
    width:hp(10),
  marginBottom:hp(3)
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
    alignSelf:'center'
  },
});
