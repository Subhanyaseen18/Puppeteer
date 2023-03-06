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
    backgroundColor:'white'
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
  Heading2:{
    flexDirection:'row',
    marginBottom:hp(2)
  },
  Heading2text1:{
    fontWeight: '600',
    fontSize:wp(6),
    color:'#0E99E7',
    marginRight:wp(67)
  },
  Heading2text2:{
    color:'#9FA5C0',
    fontWeight: '500',
    fontSize:wp(5),
  },
  categryimg:{
    width:wp(90)
  },
  styletextview:{
    marginTop:hp(2)
  },

  styletext1:{
    fontWeight:'400',
    fontSize:wp(4.5),
    color:"#9FA5C0"
  }, 
  styleticketnameview:{
    marginTop:hp(4),
    marginLeft:wp(5),
    marginBottom:wp(1)
  },
  styleticketname:{
    fontSize:wp(4),
    color:'#9FA5C0'
  },inputview
  :{
borderColor:'#D0DBEA',
 borderRadius:10,
 borderWidth:1
  },
  inputtext:{
marginLeft:wp(32),
width:wp(55),
fontSize:wp(5),
fontWeight:'500',
color:'#2E3E5C',
marginTop:hp(1),
marginBottom:hp(1)
  },
  box1:{
    borderWidth:2,
    borderColor:'#0E99E7',
    marginLeft:wp(2),
    borderRadius:8
  },
  box1text:{
    marginLeft:12,
    marginRight:12,
    marginBottom:5,
    marginTop:5,
    fontWeight:'500',
    color:'#0E99E7',
  },
  box1text1:{
    marginLeft:17,
    marginRight:17,
    marginBottom:5,
    marginTop:5,
    color:'#0E99E7',
    fontWeight:'500'
  },
  box1text2:{
    marginLeft:21,
    marginRight:21,
    marginBottom:5,
    marginTop:5,
    color:'#0E99E7',
    fontWeight:'500'
  },
  btnview: {
    position:'absolute',
    flexDirection: 'row',
    backgroundColor: '#0E99E7',
    borderColor: '#0E99E7',
    borderWidth: wp(1),
    marginLeft: wp(53),
    marginTop: hp(35),
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
  },
  arrowimg: {
    marginTop: hp(3),
    marginLeft: wp(6),
marginRight:wp(2),
    width: 25,
  },
})