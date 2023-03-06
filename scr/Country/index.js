import {
  View,
  Text,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import CountryPicker from '@volkenomakers/react-native-country-picker';

import {Formik} from 'formik';
import * as yup from 'yup';
import React, {useState} from 'react';
import {styles} from '../Country/style';
import {useSend_phone_otpMutation} from '../Apis/callapi/index';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const Country = ({props, navigation}) => {
  const [send_no_otp, response] = useSend_phone_otpMutation();
  // console.log(response, 'send_no_otp');

const handle=async(values)=>{
 let res=await send_no_otp(values).unwrap()
 console.log('res.data', res.data.otp)
 alert(res.data.otp)
}

  const [chkcountry, setchkcountry] = useState('');
  const handleemail = e => {
    // console.log('e', e)
    setchkcountry(e);
  };

  const Loginvalidation = yup.object().shape({
    phone: yup
      .string()
      .min(10, 'Use a password that isn`t easy to guess')

      .required(' InValid'),
  });

  return (
    <Formik
      initialValues={{phone: ''}}
      validateOnMount={true}
      onSubmit={values => handle(values)}
      validationSchema={Loginvalidation}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        isValid,
        values,
        touched,
        errors,
      }) => (
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
            <Text style={styles.heading1}>Country of residence</Text>
            <Text style={styles.heading2}>
              Some options will deped on immediate
            </Text>
            <Text style={styles.heading2}>
              location.We may store and send a
            </Text>
            <Text style={styles.heading2}>
              varification code to this number
            </Text>
          </View>

          <View style={styles.inputbox}>
            <View style={styles.inputcntry}>
              <CountryPicker
                onSelect={country => {
                  handleemail(country.name);
                }}
                value={chkcountry}
                // onChangeText={(e)=>}
              />
            </View>
          </View>

          <View
            style={[
              styles.inputbox2,
              {borderColor: isValid ? '#0E99E7' : '#D0DBEA'},
            ]}>
            <Image
              style={[
                styles.imgphone,
                {tintColor: isValid ? '#2E3E5C' : '#9FA5C0'},
              ]}
              source={require('../Images/phone.png')}
            />

            <TextInput
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
              placeholderTextColor={'#9FA5C0'}
              keyboardType="numeric"
              placeholder="+1(XXX) XXX-XXXX"></TextInput>
          </View>

          <View style={styles.sentmsgtext}>
            <Text style={styles.sentmsgtext1}>
              Your code will be sent via SMS to this number
            </Text>
          </View>

          <TouchableOpacity
            disabled={!isValid}
            onPress={() => {
              handleSubmit();
              navigation.navigate('Forgototp');
            }}>
            <View
              style={[
                styles.Btnview,
                {backgroundColor: isValid ? '#0E99E7' : '#F5F5F5'},
              ]}>
              <Text
                style={[
                  styles.btntext,
                  {color: isValid ? 'white' : '#DADCE1'},
                ]}>
                SEND VERIFICATION CODE
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default Country;
