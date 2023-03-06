import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
  export const styles = StyleSheet.create({
Container:{
flex:1,
paddingLeft:wp(5),
paddingRight:wp(5),
paddingTop:hp(4),
backgroundColor:'#FDFDFE',
},
Imgperson:{
    
    marginLeft:wp(0),
    marginRight:wp(4)
},
Heading:{
flexDirection:'row'
},
Headingtext1:{
    color:'#9FA5C0'
},

Headingtext2:{
    fontSize:wp(4),
    fontWeight:'700',
    color:'#2E3E5C'
},
ImgBell:{
marginLeft:wp(30),
marginTop:hp(1)
},
ImgScan:{
    marginLeft:wp(4),
    marginTop:hp(1)
},Heading2:{
flexDirection:'row',
marginTop:hp(3),
marginBottom:hp(2)

},Imgparty:{
   
    marginRight:wp(2),
     height:hp(2.5),
     width:wp(5),
     tintColor:"#0E99E7"
},Heading2text1:{
   
   fontSize:wp(4.1),
   fontWeight:'500',
   color:'#2E3E5C'
},
ImgEvent:{
    marginLeft:wp(37),
tintColor:"#0E99E7",
flexDirection:'row',
marginTop:hp(0.5),
paddingLeft:wp(3),
// marginTop:hp(1)
},
Heading2text2:{
    marginRight:wp(3),
    fontSize:wp(4.1),
    fontWeight:'500',
    color:'#0E99E7',

},
barstylebox:{
    borderColor:'#FBFBFB',
    borderWidth:1,
    backgroundColor:'#FBFBFB',
    marginBottom:5,
    borderRadius:10,
    marginTop:hp(2)
},lineheading:{
    alignSelf:'center',
    fontWeight:'600',
    fontSize:15,
    color:'#2E3E5C',
    // marginBottom:hp(2)
},
barheading1:{
    marginLeft:wp(7),
    fontWeight:'600',
    fontSize:15,
    color:'#2E3E5C'
},
barheading2:{
    marginLeft:wp(7),
    fontWeight:'500',
    color:'#9FA5C0',
    marginBottom:10  
}


  })