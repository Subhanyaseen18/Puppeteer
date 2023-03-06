import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';

import React, {useState} from 'react';
import {styles} from './style';

const TicketCost = props => {
  const [value, setvalue] = useState(0);
 
  const onclick = text => {
   
    setvalue(parseInt(value) + text);
  };
 

  return (
    <View style={styles.Container}>
      <View style={styles.Backarow}>
        <Text
          style={{marginRight: 300}}
          onPress={() => props.navigation.navigate('TicketDes')}>
          <Image
            style={{tintColor: '#3F414E'}}
            source={require('../../Images/arow.png')}
          />
        </Text>
      </View>
      <View style={styles.Heading}>
        <Text style={styles.Headingtext}>Create tickets</Text>
      </View>
      <View style={styles.Heading2}>
        <Text style={styles.Heading2text1}>COST</Text>
        <Text style={styles.Heading2text2}>3/4</Text>
      </View>
      <Image
        style={styles.categryimg}
        source={require('../../Images/costline.png')}
      />
      <View style={styles.styletextview}>
        <Text style={styles.styletext1}>Share your ticket price</Text>
      </View>
      <View style={styles.styleticketnameview}>
        <Text style={styles.styleticketname}>Price per ticket</Text>
      </View>

      <View style={styles.inputview}>
        <TextInput
        keyboardType='numeric'
       
   maxLength={10}
                 style={styles.inputtext}>

          {value}
        </TextInput>
      </View>
      <View style={{flexDirection: 'row', marginTop: 30}}>
        <TouchableOpacity
          //   onPressIn={() => {
          // onclick(+500)
          // }}
          onPress={() => {
            onclick(500);
            // Add();
          }}>
          <View style={styles.box1}>
            <Text style={styles.box1text}>+500</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onclick(100)}>
          <View style={styles.box1}>
            <Text style={styles.box1text}>+100</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onclick(+50)}>
          <View style={styles.box1}>
            <Text style={styles.box1text1}>+50</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onclick(+10)}>
          <View style={styles.box1}>
            <Text style={styles.box1text1}>+10</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onclick(+5)}>
          <View style={styles.box1}>
            <Text style={styles.box1text2}>+5</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('TicketQuantity')}
          style={styles.btnview}>
          <Text style={styles.btntext}> NEXT</Text>
          <Image
            style={styles.arrowimg}
            source={require('../../Images/arrowright.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TicketCost;
