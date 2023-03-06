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
    fontSize: hp(3.5),
    color: '#2E3E5C',
    fontWeight:'600'
  },
  heading2:{
    fontWeight:'400',
    color:'#9FA5C0'
    },

  inputbox2: {
    marginTop: hp(5),
    borderRadius: hp(1),
    borderColor:'#0E99E7',
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor:'#F5F5F5',
    fontWeight:'500',
    color:'#2E3E5C'
  },
  imgphone: {
    marginTop: hp(2.8),
    marginLeft: hp(2),
    marginRight: hp(1),
    color:'#2E3E5C',
    tintColor: '#2E3E5C'
  },

  Btnview: {
    marginTop: hp(6),
    borderRadius: hp(1),
    alignItems: 'center',
    backgroundColor: '#0E99E7',
  },

  btntext: {
    fontSize: hp(2),
    marginTop: hp(2.5),
    marginBottom: hp(2.5),
    color: 'white',
    fontWeight:'400'
  },

  userphone: {
    marginBottom: hp(0.5),
    marginTop: hp(0.5),
    width: wp(65),
    
  },

  backarow: {
    marginTop: hp(3),
    marginLeft: wp(2),
  },
  
  toucharowimg:{
    marginRight:wp(80)
  }
});
