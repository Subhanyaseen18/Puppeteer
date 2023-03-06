import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import {styles} from './style';
import { useGetmembereventsMutation } from '../../Apis/callapi';
const Event = ({navigation}) => {
     const response=useGetmembereventsMutation()
  console.log('response', response)
  return (
    <View style={styles.Container}>
      <View style={styles.Backarow}>
        <Text
          style={{marginRight: 300}}
          onPress={() => navigation.navigate('Home')}>
          <Image
            style={{tintColor: '#3F414E'}}
            source={require('../../Images/arow.png')}
          />
        </Text>
        <TouchableOpacity  onPress={() => navigation.navigate('CreateEvent')}>
          <Image
            style={styles.Imgaddevent}
            source={require('../../Images/addevent.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.Heading}>
        <Text style={styles.Headingtext}>Event</Text>
      </View>
      <View style={styles.inputbox}>
        <Image
          style={styles.imgsearch}
          source={require('../../Images/search.png')}
        />

        <TextInput
          style={styles.username}
          placeholder="Find your event"
          placeholderTextColor={'#9FA5C0'}></TextInput>
      </View>
      <View style={styles.imgeventlogo}>
        <Image source={require('../../Images/eventlogo.png')} />
      </View>
      <View  style={styles.eventtext}>
        <Text  style={styles.eventtext1}>No events</Text>
        <Text  style={styles.eventtext2}>
          Create a new event by tapping on 
          
        </Text>
        <Text  style={styles.eventtext2}>
        plus button( and follow simple
          steps).
        </Text>
      </View>
    </View>
  );
};
export default Event;
