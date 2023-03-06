import {StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingLeft: wp(5),
    paddingRight: wp(5),
    backgroundColor: 'white',
  },
  Backarow: {
    paddingLeft: wp(2),
    flexDirection: 'row',
    marginTop: hp(4),
  },
  heading:{
    alignSelf:'center',
   
  },
  headingtext1:{
    fontWeight:'600',
    fontSize:wp(7),
     marginTop:hp(5),
     marginBottom:hp(2)
  },
  Imgprofilepic:{
    marginTop:hp(5),
    marginBottom:wp(3)
  },styleprofile:{
    position:'absolute',
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "white"
  },

  box:{
    borderWidth:1,
    borderColor:'#D0DBEA',
    borderRadius:10,
    marginTop:hp(5)
  },
  boxtext:{
    marginRight:wp(2),
    marginLeft:wp(5),
    marginTop:hp(2),
    marginBottom:hp(2),
    color:'#9FA5C0',
    fontWeight:'500'
  },
  Btnview: {
    marginTop: hp(35),
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
  modalstyle: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  modalstyle1: {
    backgroundColor: '#ffffff',
    marginTop: hp(70),
   
   
    borderRadius: 20,
    flex: 1,
  },
  
  
 
  modalbtnview: {
    marginTop: hp(2),
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
})