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
    fontWeight: '600',
  },
  heading2: {
    fontWeight: '400',
    color: '#9FA5C0',
  },
  inputbox: {
    marginTop: hp(2),
    borderRadius: hp(1),
    flexDirection: 'row',
    borderColor: '#D0DBEA',
    borderWidth: 1,
    backgroundColor:'#F5F5F5',
  },
  imgcountry: {
    marginTop: hp(2),
    marginLeft: hp(2),
    marginRight: hp(1),
    marginBottom:hp(2)
  },
  inputbox2: {
    marginTop: hp(2),
    borderRadius: hp(1),
    flexDirection: 'row',
    borderWidth: 1,
    // borderColor: 'red',
    backgroundColor:'#F5F5F5',
  },
  imgphone: {
    marginTop: hp(2.2),
    marginLeft: hp(2),
    marginRight: hp(1),
  },
  
 
  Btnview: {
    marginTop: hp(2),
    borderRadius: hp(1),
    alignItems: 'center',
    // backgroundColor: '#0E99E7',
  },

  btntext: {
    fontSize: hp(2),
    marginTop: hp(2),
    marginBottom: hp(2),
   
    fontWeight: '600',
  },

  userphone: {
    marginBottom: hp(0.5),
    marginTop: hp(0.5),
    width: wp(65),
  },
  useremail: {
    marginBottom: hp(1),
    marginTop: hp(1),
    width: wp(65),
  },
  backarow: {
    marginTop: hp(4),
    marginLeft: wp(2),
  },
  
  toucharowimg:{
    marginRight:wp(80)
  },
  sentmsgtext: {
    alignSelf: 'center',
    marginTop: hp(6),
  },
  inputcntry: {
   padding:wp(1.2),
    marginBottom: hp(0.5),
    marginTop: hp(0.5),
    width: wp(90),
  },
  sentmsgtext1: {
    color: '#9FA5C0',
    fontWeight: '400',
    fontSize: hp(2),
  },
 
 
  
  

 
});
