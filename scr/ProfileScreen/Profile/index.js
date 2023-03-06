import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './style';
import { useLogoutMutation } from '../../Apis/callapi/index';
import { useDispatch, useSelector } from 'react-redux';
import { logout, userSlice, token as SETTOKEN } from '../../Apis/store/slice';

const Profile= props => {
 
  const [data,response]=useLogoutMutation()
const {token} = useSelector(state => state.user)
  console.log('response', token)
  
  
  const dispatch=useDispatch();

const handle=()=>{
  dispatch(SETTOKEN(null)) 
} 

const handle_logout=async ()=>{
  try{
  let res = await  data(token)
  console.log('res', res)
  // dispatch(logout())

}catch(e){
  console.log('e', e)
}
}

  return (
    <View style={styles.Container}>
       
      <View style={styles.Backarow}> 
        <TouchableOpacity
          onPress={() => props.navigation.navigate('EditProfile')}>
          <Image
            style={styles.Imgaddevent}
            source={require('../../Images/editprofilelogo.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.heading}>
        <Text style={styles.headingtext1}>Profile</Text>
        </View>
        <View style={styles.heading}>
          <Image
              style={{
                // position:'absolute',
                width: 150,
                height: 150,
                borderRadius: 150 / 2,
                overflow: "hidden",
                borderWidth: 3,
               marginBottom:10,
               marginTop:10 
               }}
            source={require('../../Images/profilepic.png')}
          />
        </View>
        <View style={styles.heading}>
        <Text style={styles.headingtext1}>Roger Westervelt</Text>
        </View>
        <View style={styles.stylehost}>
<Text style={styles.stylehosttext}>Host</Text>
        </View>
        <Image
            style={styles.Imgprofilepic}
            source={require('../../Images/Line.png')}
          />

<View style={styles.emailview}>
      <Image style={styles.imgmail} 
      source={require('../../Images/Message.png')}/>

        <Text style={styles.styleemailtext} 
         
        > raitynBergson@gmail.com</Text>
      </View> 
      <View style={styles.emailview}>
      <Image style={styles.imgmail} 
      source={require('../../Images/phone.png')}/>

        <Text style={styles.styleemailtext} 
         
        > +1 (650) 256-2136</Text>
      </View> 

     <View style={styles.btnview} >
     <TouchableOpacity
     
        onPress={() =>{
          handle_logout();
         handle()
          // props. navigation.navigate('Login')
      }
      }
      // onPress={() => }
        style={styles.btntouch}
        >
          
       
             <Image
          style={styles.arrowimg}
          source={require('../../Images/logoutphone.png')}
        />
        <Text style={styles.btntext}>LOGOUT</Text>
       
      </TouchableOpacity>
     </View>
    </View>
  );
};
export default Profile;
