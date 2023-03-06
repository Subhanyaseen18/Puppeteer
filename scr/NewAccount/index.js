import {
  View,
  Text,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  Modal
} from 'react-native';
import React, { useState } from 'react';
import {styles} from './style';
import { useGetRegisterMutation } from '../Apis/callapi';

const Account = ({navigation}) => {
  const [newreg,response]=useGetRegisterMutation()
  const [show, setshow] = useState(false);
  const [name,setname]=useState('')
  const [email,setemail]=useState('')

const handlename=(e)=>{

  // console.log('e', e)
  setname(e)
}
const handleemail=(e)=>{
  // console.log('a', e)
  setemail(e)

}
const b=(e)=>{
  // console.log(name,'name')
  // console.log('email',email)
  const data={
    email: email,
    name: name
  }
  newreg(data)
 
}
  console.log('jdjdjd', response);

  
  
  return (
    <View style={styles.Container}>

<View>
            <Modal transparent={false} visible={show}>
              <View style={styles.modalstyle}>
                <View style={styles.modalstyle1}>
                  <View style={styles.img}>
                    <Image
                      style={styles.tickimg}
                      source={require('../Images/tick.png')}
                    />
                  </View>
                  <View style={styles.modalheading}>
                    <Text style={styles.modalheading1}>Sign up </Text>
                    <Text style={styles.modalheading1}>successfully</Text>
                  </View>
                  <TouchableOpacity
                    style={{paddingLeft: 30, paddingRight: 30}}
                    onPress={() => {
                      setshow(false);
                      navigation.navigate('F');
                    }}>
                    <View style={styles.modalbtnview}>
                      <Text style={styles.modalbtntext}>Create event</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>

      <TouchableOpacity
        style={styles.toucharowimg}
        onPress={() => navigation.navigate('Forgototp')}>
        <View style={styles.backarow}>
          <Image
            style={styles.arowimg}
            source={require('../Images/arow.png')}
          />
        </View>
      </TouchableOpacity>

      <View style={styles.heading}>
        <Text style={styles.heading1}>Create your account</Text>
        <Text style={styles.heading2}>Please enter your detail here</Text>
      </View>

      <View style={styles.inputbox}>
        <Image
          style={styles.imgusername}
          source={require('../Images/bx_user-circle.png')}
        />

        <TextInput
        onChangeText={ (e)=>handlename(e)}
 
        value={name}
          style={styles.username}
          placeholder="Your name"
          placeholderTextColor={'#9FA5C0'}></TextInput>
      </View>
      <View style={styles.inputbox}>
        <Image
          style={styles.imgusername}
          source={require('../Images/Message.png')}
        />

        <TextInput
        onChangeText={(e)=>handleemail(e)}
        value={email}
          style={styles.useremail}
          placeholder="Email"
          placeholderTextColor={'#9FA5C0'}></TextInput>
      </View>
      <TouchableOpacity
      onPress={() =>{ b(); 
         setshow(true)
          // navigation.navigate('Country')
        }
      }
        style={styles.btn}>
        <View style={styles.Btnview}>
          <Text style={styles.btntext}>GET STARTED</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Account;
