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
    marginTop: hp(10),
    // alignItems: 'center',
  },
  heading1: {
    fontSize: hp(2.7),
    color: '#2E3E5C',
    fontWeight:'bold',
    marginBottom:hp(1)
  },
  inputbox: {
    marginTop: hp(5),
    borderRadius: hp(1),
    
    flexDirection: 'row',
    backgroundColor:'#F5F5F5',
    borderWidth: 1,
  },
  imgmsg: {
       marginTop: hp(2),
    marginLeft: hp(2),
    marginRight: hp(1),
  },
  inputbox2: {
    marginTop: hp(2),
    borderRadius: hp(1),
    flexDirection: 'row',
    borderWidth: 1,
    // borderColor: '#D0DBEA',
    backgroundColor:'#F5F5F5',
  },
  imglock: {
    marginTop: hp(2.2),
    marginLeft: hp(2),
    marginRight: hp(1),
  },
  imgshow: {
    width: wp(6),
    height: hp(3),
    marginTop: hp(2),
    marginLeft: hp(1.5),
      
  },
  Btnview: {
    marginTop: hp(7),
    borderRadius: hp(1),
    alignItems: 'center',
   borderRadius:10
  },

  btntext: {
    fontSize: hp(2),
    marginTop: hp(2.5),
    marginBottom: hp(2.5),
    // color: 'white',
    fontWeight:'bold'
  },
 
 inputuserpassword: {
    width: wp(65),
    color:'#2E3E5C',
    fontWeight:'500',
    marginTop:hp(0.5),
    marginBottom:hp(0.5),
    backgroundColor:'#F5F5F5',
  },
  inputuseremail: {
    width: wp(65),
    color:'#2E3E5C',
    fontWeight:'500',
    marginTop:hp(0.5),
    marginBottom:hp(0.5)
  },
  eror: {
    marginLeft:wp(3),
    marginTop: hp(1),
    fontSize: hp(1.5),
    fontWeight: 'bold',
    color: 'red',
  },
  forgotview: {
    alignItems: 'flex-end',
    marginTop: hp(2.5),
  },
  forgotpass: {
    color: '#0E99E7',
    fontWeight: '700',
    fontSize:hp(2.2)
  }, 
  nextscrn: {
    flexDirection: 'row',

    position: 'absolute',
    marginTop: hp(95),
    alignSelf: 'center',
    
  },
  
  nextscrn1:{
    fontWeight:'500' ,
    color:'#2E3E5C',
    fontSize:wp(4)
  },
  nextscrn2:{
    color: '#0E99E7', 
    fontWeight: '700',
    fontSize:wp(4)
  },imgline:{
    tintColor:'#0E99E7',
    position:"absolute",
    marginTop: hp(97.2),
    marginLeft:wp(54),
    width:wp(27)
  }
});
