import {
  View,
  Text,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import { useReset_passwordMutation } from '../Apis/callapi';
const ForgotScreen = ({navigation}) => {
const [data,setdata]=useState("");
 
const handlepassword=(e)=>{
  setdata(e)
}
const handlebtn=()=>{
  // console.log('data', data)
  resetpassword(data)
}
  const [ resetpassword,response]=useReset_passwordMutation()
  console.log('response', response)
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        style={styles.toucharowimg}
        onPress={() => navigation.navigate('Login')}>
        <View style={styles.backarow}>
          <Image
            style={styles.arowimg}
            source={require('../Images/arow.png')}
          />
        </View>
      </TouchableOpacity>

      <View style={styles.heading}>
        <Text style={styles.heading1}>Password recovery</Text>
        <Text style={styles.heading2}>Enter your phone number to recover</Text>
        <Text style={styles.heading2}>your password</Text>
      </View>

      <View style={styles.inputbox2}>
        <Image
          style={styles.imgphone}
          source={require('../Images/phone.png')}
        />

        <TextInput
         onChangeText={ (e)=>handlepassword(e)}
 
         value={data}
        
          style={styles.userphone}
          placeholder="+1(XXX) XXX-XXXX"></TextInput>
      </View>

      <TouchableOpacity onPress={()=>handlebtn()}>
        <View style={styles.Btnview}>
          <Text style={styles.btntext}>SEND VERIFICATION CODE</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotScreen;
