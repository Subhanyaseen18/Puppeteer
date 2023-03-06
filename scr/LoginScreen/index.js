import {
  View,
  Text,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React,{useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {styles} from './style';
import {Formik} from 'formik';
import * as yup from 'yup';
import {StatusBar} from 'react-native';
import {useGetloginMutation} from '../Apis/callapi/index';
import { useDispatch } from 'react-redux';
import { login, token } from '../Apis/store/slice';

const Login = ({navigation}) => {
  const [newdata, response] = useGetloginMutation();
 const dispatch=useDispatch();

 const handle=async (values)=>{

  let res = await newdata(values).unwrap()
  console.log('res.dataaaaa', res.status)
if(res.status==200){
dispatch(login({
  data:res.data
  // email:values.email,
  // password:values.password, 
  // loggedIn:true, 
}))

dispatch(token(res.data.access_token))
 }}
 
  

    const Loginvalidation = yup.object().shape({
      email: yup
        .string()
        .email('Use an email address that you can access easily')
        .required('Email InValid'), 
      password: yup
        .string()
        .min(8, 'Use a password that isn`t easy to guess')
        .required(' InValid'),
    });
    const [showpassword, setshowpassword] = useState(false);
    return (
      <Formik
        initialValues={{email: '', password: ''}}
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
          <StatusBar backgroundColor="#F5F5F5" barStyle="dark-content" />

          <View style={styles.heading}>
            <Text style={styles.heading1}>Welcome Back!</Text>
            <Text
              style={{color: '#9FA5C0', fontSize: hp(1.8), fontWeight: '400'}}>
              Please enter your account here
            </Text>
          </View>

          <View
            style={[
              styles.inputbox,
              {borderColor: isValid ? '#0E99E7' : '#D0DBEA'},
            ]}>
            <Image
              style={styles.imgmsg}
              source={require('../Images/Message.png')}
            />

            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              style={styles.inputuseremail}
              placeholder="Email"
              placeholderTextColor={'#9FA5C0'}></TextInput>
          </View>
          {errors.email && touched.email && (
            <Text style={styles.eror}>{errors.email}</Text>
          )}
          <View
            style={[
              styles.inputbox2,
              {borderColor: isValid ? '#0E99E7' : '#D0DBEA'},
            ]}>
            <Image
              style={styles.imglock}
              source={require('../Images/Lock.png')}
            />

            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry={showpassword}
              style={styles.inputuserpassword}
              placeholder="Password"
              placeholderTextColor={'#9FA5C0'}></TextInput>
            <TouchableOpacity onPress={() => setshowpassword(!showpassword)}>
              <Image
                style={styles.imgshow}
                source={require('../Images/Show.png')}
              />
            </TouchableOpacity>
          </View>
          {errors.password && touched.password && (
            <Text style={styles.eror}>{errors.password}</Text>
          )}
          <View style={styles.forgotview}>
            <Text
              onPress={() => navigation.navigate('Forgot')}
              style={styles.forgotpass}>
              Forgot Password?
            </Text>
          </View>
          <TouchableOpacity
            disabled={!isValid}
            // onPress={() => navigation.navigate('F')}
          >
            <View
              style={[
                styles.Btnview,
                {backgroundColor: isValid ? '#0E99E7' : '#F5F5F5'},
              ]}>
              <Text onPress={()=>navigation.navigate('F')}
                // onPress={()=>handleSubmit()}
                style={[
                  styles.btntext,
                  {color: isValid ? 'white' : '#DADCE1'},
                ]}>
                LOGIN
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.nextscrn}>
            <Text style={styles.nextscrn1}>Don`t have access?</Text>

            <Text
              style={styles.nextscrn2}
              onPress={() => navigation.navigate('Country')}
              >
              Become a host
            </Text>
          </View>
          <Image
            style={styles.imgline}
            source={require('../Images/Line.png')}
          />
        </View>
      )}
    </Formik>
  );
};
export default Login;
