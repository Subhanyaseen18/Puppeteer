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
  Heading: {
    marginTop: hp(7),
  },

  Heading1: {
    fontWeight: '600',
    color: '#2E3E5C',
    fontSize: hp(3),
  },
  Heading2: {
    color: '#9FA5C0',
    marginTop: hp(1),
  },
  input: {
    
    fontWeight: '600',
    alignSelf: 'center',
    padding: 10,
    height: 70,
    width: 50,
    borderRadius: 10,
    borderWidth: 1,
     borderColor: '#E7ECF4',
    marginTop: hp(7),
    // marginLeft:wp(5)
  },
  inputbox: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  again: {
    marginTop: hp(9),
    alignItems: 'center',
    marginBottom: hp(5),
  
  },
  Btnview: {
    marginTop: hp(2),
    borderRadius: hp(1),
    alignItems: 'center',
    backgroundColor: '#0E99E7',
  },

  btntext: {
    fontSize: hp(2),
    marginTop: hp(2),
    marginBottom: hp(2),
    color: 'white',
    fontWeight: '600',
  },
  
  
 imgline:{
    tintColor:'#0E99E7',
    position:"absolute",
    marginTop: hp(39.5),
    marginLeft:wp(60),
    width:wp(20)
  },
  codeFieldRoot: {marginTop:wp(10)
  },
  cell: {
    width:wp(14),
    height: hp(7),
    lineHeight: 58,
    marginLeft:wp(2),
    fontSize:wp(6),
    borderWidth: 2,
    // borderColor: '#00000030',
    textAlign: 'center',
    borderRadius:10,
    backgroundColor: '#FDFDFE',
    borderColor: '#E7ECF4',
  },
  focusCell: {
    borderColor: '#0E99E7',
  },
});
