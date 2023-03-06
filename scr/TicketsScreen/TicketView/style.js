import {StyleSheet} from 'react-native';
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
  Heading: {
    paddingLeft: wp(1),
    marginTop: hp(3),
  },
  Headingtext: {
    fontSize: wp(7),
    fontWeight: '600',
    color: '#2E3E5C',
  },
  styletextview: {
    marginTop: hp(1),
  },

  styletext1: {
    fontWeight: '400',
    fontSize: wp(4.5),
    color: '#9FA5C0',
  },
  box: {
    borderWidth: 1,
    borderColor: '#D0DBEA',
    marginTop: hp(4),
    borderRadius: 10,
  },
  boxtext: {
    marginTop: hp(4),
    marginBottom: hp(1),
    fontWeight: '500',
    color: '#9FA5C0',
    marginLeft: wp(3),
  },
  boxtextpaid: {
    marginRight: wp(70),
    fontWeight: '500',
    color: '#2E3E5C',
    marginLeft: wp(3),
  },
  boxtextvip: {
    marginRight: wp(72),
    fontWeight: '500',
    color: '#2E3E5C',
    marginLeft: wp(3),
  },
  boxtexteachticket: {
    marginRight: wp(25),
    fontWeight: '500',
    color: '#2E3E5C',
    marginLeft: wp(3),
  },
  boxtextreqticket: {
    marginRight: wp(34),
    fontWeight: '500',
    color: '#2E3E5C',
    marginLeft: wp(3),
    marginBottom: hp(3),
  },
  Btnview: {
    marginTop: hp(20),
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
  modalstyle: {
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
  img: {
    marginTop: hp(2),

    alignSelf: 'center',
  },
  tickimg: {
    height: wp(22),
    width: hp(10),
    marginBottom: hp(3),
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
    alignSelf: 'center',
  },
  modal1style: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  modal1style1: {
    backgroundColor: '#ffffff',
    marginTop: hp(60),

    borderRadius: 20,
    flex: 1,
  },
  modaltext:{
marginLeft:wp(6),
marginBottom:hp(1),
marginTop:hp(4),
color:'#9FA5C0',
fontWeight:'500',
fontSize:wp(4)
  },
  modalbox: {
   borderWidth:1,
   borderColor:'#D0DBEA',
   flexDirection:"row",
   marginLeft:wp(3),
   marginRight:wp(3),
   borderRadius:10
  },
  modalboxtext:{
    marginTop:hp(2),
    marginBottom:hp(2),
    marginLeft:wp(5),
    fontWeight:'500',
    color:'#2E3E5C',
    fontSize:wp(5)
  },
  showimg: {
    marginTop:hp(3),
    marginBottom:hp(2),
    marginLeft:wp(70),
  
  },
  modal1heading: {
    alignItems: 'center',
    marginTop:hp(3)
  },
  modal1heading1: {
    fontWeight: '700',
    color: '#2E3E5C',
    fontSize: wp(6),
  },
  modal1btnview1: {
    marginTop: hp(5),
    borderRadius: hp(1),
    backgroundColor: '#0E99E7',
  },
  modal1btnview: {
    marginTop: hp(5),
    borderRadius: hp(1),
    backgroundColor: '#F3F3F4',
  },
  modal1btntext: {
    fontSize: hp(2),
    marginTop: hp(2),
    marginBottom: hp(2),
    marginLeft:wp(12),
    marginRight:wp(12),
    color: 'white',
    fontWeight: '600',
    alignSelf: 'center',
    color:"#C8CCD3"
  },
  modal1btntouch:{
    marginLeft:wp(5),
    marginRight:wp(5)
  },
  modal1btn1text:{
    fontSize: hp(2),
    marginTop: hp(2),
    marginBottom: hp(2),
    marginLeft:wp(12),
    marginRight:wp(12),
    color: 'white',
    fontWeight: '600',
    alignSelf: 'center',
    color:"white"
  }
});
