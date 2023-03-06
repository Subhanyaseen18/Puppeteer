import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {styles} from './style';

import {useState} from 'react';
import {useRef} from 'react';
import {
  useVarifyotpMutation,
  useResendvarifyotpMutation,
} from '../Apis/callapi';

const CELL_COUNT = 6;
const OTP = ({navigation}) => {
  const [varify_otp, response] = useVarifyotpMutation();
  console.log(response, 'varify_otp');

  const handle = ( value )=> {
    // console.log('res.dataaaaa', res.status);
   
    varify_otp(value)

 

  //   let res = await varify_otp(value).unwrap();
  //   console.log('values.....', value)
    
  //   if (res.status == 200) {
  //     props.navigation.navigate('NewAccount');
  //   } else {
  //     alert('Please Enter valid otp');
  //   }
  };

  const [resend_otp, response1] = useResendvarifyotpMutation();
  // console.log(response1, 'resend_otp');

  
  const [value, setValue] = useState('');
  console.log('value ', value )
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  // const test=()=>{
  //   setValue(value)

  // }
  return (
    
        <View style={styles.Container}>
          <View style={styles.Heading}>
            <Text style={styles.Heading1}>Verifying your identity</Text>
            <Text style={styles.Heading2}>
              Check your phone. We’ve sent you the{' '}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#9FA5C0'}}>Code at </Text>
              <Text style={{color: '#2E3E5C'}}>+1 (246) 247 2354</Text>
            </View>
          </View>
          <View style={styles.inputbox}>
          <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
      
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
           
           
          
            
          </View>
          <View style={styles.again}>
            <Text style={{color: '#9FA5C0', fontWeight: '400', fontSize: 15}}>
              Didn’t recieved phone?
              <TouchableOpacity 
              onPress={() => resend_otp()}
              >
                <Text style={{color: '#0E99E7'}}>Send again</Text>
              </TouchableOpacity>
            </Text>
          </View>
          <Image
            style={styles.imgline}
            source={require('../Images/Line.png')}
          />
          <TouchableOpacity
            // disabled={!isValid}
            onPress={() => {
              handle();
              // test()
              // handleSubmit();
              // handleSubmit;navigation.navigate('NewAccount')
              //  setshow(true)
            }}>
            <View
              style={[
                styles.Btnview,
                {backgroundColor: value ? '#0E99E7' : '#F5F5F5'},
              ]}>
              <Text
                style={[
                  styles.btntext,
                  {color: value ? 'white' : '#DADCE1'},
                ]}>
                Continue
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
//     </Formik>
//   );
// };
export default OTP;
