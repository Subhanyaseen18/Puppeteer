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
    marginRight:wp(45)
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
    marginLeft:wp(5)
  },
  styleticketname:{
    fontSize:wp(5),
    color:'#9FA5C0'
  },
  styleBox:{
    borderRadius:10,
    borderWidth:1,
    borderColor:'#D0DBEA',
    marginTop:hp(1)
 
  },
  styleBoxtext:{
    marginTop:hp(2),
    marginBottom:hp(2),
    fontSize:wp(5),
    marginLeft:wp(8),
    color:'#9FA5C0'
  },
  stylebtn:{
    flexDirection:'row',
    marginTop:hp(10)
  },
  stylegndrtext:{
    marginRight:wp(40),
    fontSize:wp(5),
    fontWeight:"600",
    color:'#2E3E5C'
  },
  btnview: {
    flexDirection: 'row',
    
    // borderColor: '#0E99E7',
    // borderWidth: wp(1),
    marginLeft: wp(50),
    marginTop: hp(18),
    borderRadius: 10,
    marginRight: wp(5),
  },
  btntext: {
   
    fontSize: wp(5),
    marginTop: hp(2),
    marginBottom: hp(2),
    marginLeft: wp(3),
    fontWeight: '700',
  },
  arrowimg: {
    marginTop: hp(3),
    marginLeft: wp(6),

    width: 25,
  }, showmodalbox:{
    borderWidth:1,
    marginTop:hp(60),
    flexDirection:'row',
    position:'absolute',
    borderRadius:10,
    height:hp(8),
    width:wp(90),
    marginLeft:wp(5),
    borderColor:'#D0DBEA'
  },
  showmodalboxtext:{
    position:'absolute',
    color:'#0E99E7',
    fontWeight:'500',
    fontSize:wp(5),
    marginTop:hp(2),
    marginBottom:hp(2),
    marginLeft:wp(5)
  },
  imgopen:{
    position:'absolute',
    marginLeft:wp(82),
    marginTop:hp(3.5),
    marginBottom:hp(3.5)
  }
 
})