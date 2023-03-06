import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
const EmptyTicket = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <View style={styles.Backarow}>
        <Text
          style={{marginRight: 300}}
          onPress={() => navigation.navigate('Event')}>
          <Image
            style={{tintColor: '#3F414E'}}
            source={require('../../Images/arow.png')}
          />
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('CreateTicket')}>
          <Image
            style={styles.Imgaddevent}
            source={require('../../Images/addevent.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.Heading}>
        <Text style={styles.Headingtext}>Tickets</Text>
        <Text style={styles.Headingtext2}>
          Manage your tickets qyickly and easy.
        </Text>
      </View>
      <View style={styles.styleprice}>
        <Text style={styles.dolrpriceshow}>$0</Text>
        <Text style={styles.ticketshow}>0</Text>
      </View>
      <View style={styles.styledolr}>
        <Text style={styles.dolrpricetext}>Total value of all tickets</Text>
        <Text style={styles.tickettext}>Total tickets</Text>
      </View>
      <Image style={styles.tickimg} source={require('../../Images/Line.png')} />

      <View style={styles.imgticketlogo}>
        <Image source={require('../../Images/ticketlogo.png')} />
      </View>
      <View style={styles.tickettext}>
        <Text style={styles.tickettext1}>No tickets</Text>
      </View>
      <View>
        <View style={styles.Btnview}>
          <Text onPress={()=>navigation.navigate('CustomerDetail')} style={styles.btntext}>
            SELL TICKETS
          </Text>
        </View>
      </View>
    </View>
  );
};
export default EmptyTicket;
