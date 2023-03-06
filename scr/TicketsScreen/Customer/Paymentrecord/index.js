import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import DatePicker from 'react-native-date-picker';

const Paymentrecord = props => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.Container}>
      <View style={styles.Backarow}>
        <Text
          style={{marginRight: 300}}
          onPress={() => props.navigation.navigate('CustomerDetail')}>
          <Image
            style={{tintColor: '#3F414E'}}
            source={require('../../../Images/arow.png')}
          />
        </Text>
      </View>
      <View style={styles.Heading}>
        <Text style={styles.Headingtext}>Payment Record</Text>
      </View>
      <View style={styles.box1}>
        <Text style={styles.paymentdate}>Payment date</Text>
        <TouchableOpacity onPress={() => setOpen(true)}>
          <Text style={styles.eventendyearstyle}>
            {date?.toLocaleDateString()} {'>'}
          </Text>
          <DatePicker
            modal
            open={open}
            date={date}
            mode="date"
            onConfirm={date => {
              setOpen(false);
              setDate(date);
              // handle_eventstrt(date)
            }}
            onCancel={() => {
              setOpen(false);
            }}
            // value={eventstrt}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.box1}>
        <Text style={styles.box1text}>Payment Method</Text>

        <Text style={styles.cash}>Cash in Hand</Text>
      </View>
      <View style={styles.inputbox}>
        <Text style={styles.stylegndr}>Tickets Selected</Text>

        <Text
          onPress={() => props.navigation.navigate('SelectTicket')}
          style={styles.type}>
          0 type {'>'}
        </Text>
      </View>
      <View style={styles.showview}>
<Text style={styles.showtext}>Breakdown <Text style={{color:'#0E99E7'}}>Show/Hide</Text></Text>
<Image
            style={{tintColor: '#0E99E7',marginLeft:70,width:66}}
            source={require('../../../Images/Line.png')}
          />
      </View>

<View><Image
            style={styles.imgline}
            source={require('../../../Images/Line.png')}
          /></View>
          <View  style={styles.totalview} >
            <Text  style={styles.totaltext}>Total</Text>
            <Text style={styles.totaltext2}>$0.00</Text>
          </View>
      <TouchableOpacity onPress={() => props.navigation.navigate('Invoice')}>
        <View style={styles.Btnview}>
          <Text style={styles.btntext}>CONTINUE</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Paymentrecord;
