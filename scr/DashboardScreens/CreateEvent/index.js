import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Image,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {Formik} from 'formik';
import * as yup from 'yup';
import DatePicker from 'react-native-date-picker';
import { useCreareeventMutation } from '../../Apis/callapi';
const CreateEvent = ({navigation}) => {

  const [createevents,response]=useCreareeventMutation() ;
  console.log('response', response) 


   const [eventstrt,seteventstrt]=useState('')
   const [eventend,seteventend]=useState('')
   const [eventstrttime,seteventstrttime]=useState('')
   const [eventendtime,seteventendtime]=useState('')
 const handle_eventstrt=(e)=>{
   seteventstrt(e)
 }
 const handle_eventend=(e)=>{
  seteventend(e)
}
const handle_eventstrttime=(e)=>{
  seteventstrttime(e)
}
const handle_eventendtime=(e)=>{
 seteventendtime(e)
}



 
  const [showmodal, setshowmodal] = useState(false);
  const [Hrs, setHrs] = useState(new Date());
  const [openHrs, setOpenHrs] = useState(false);

  const [Hrsend, setHrsend] = useState(new Date());
  const [openend, setOpenend] = useState(false);

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [dateend, setDateend] = useState(new Date());
  const [showend, setshowend] = useState(false);

  const time = new Date(`${Hrs}`);
  const timeend = new Date(`${Hrsend}`);

  const datee = new Date(`${dateend}`);

  const Loginvalidation = yup.object().shape({
    event: yup.string().min(1,'').required(""),
    location: yup.string().min(1,'').required(""),
  });
  return (
    <Formik
    initialValues={{event:'', location: ''}}
    validateOnMount={true}
    onSubmit={values => createevents([values,eventstrt,eventstrttime,eventend,eventendtime])}
    validationSchema={Loginvalidation}>
    {({handleChange, handleBlur, handleSubmit, isValid, values}) => (
    <View style={styles.Container}>
      <View>
        <Modal transparent={false} visible={showmodal}>
          <View style={styles.modalstyle}>
            <View style={styles.modalstyle1}>
              <View style={styles.img}>
                <Image
                  style={styles.tickimg}
                  source={require('../../Images/tick.png')}
                />
              </View>
              <View style={styles.modalheading}>
                <Text style={styles.modalheading1}>Event created  </Text>
                <Text style={styles.modalheading1}>successfully</Text>
              </View>
              <TouchableOpacity
                style={{paddingLeft: 30, paddingRight: 30}}
                onPress={() => navigation.navigate('Event')}>
                <View style={styles.modalbtnview}>
                  <Text style={styles.modalbtntext}>Back to event screen</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>

      <View style={styles.Heading}>
        <Text style={styles.Headingtext}>Create event</Text>
        <Text style={styles.Headingtext2}>
          Share some detail about your event
        </Text>
      </View>
      <View style={styles.inputbox}>
        <TextInput 
         onChangeText={handleChange('event')}
         onBlur={handleBlur('event')}
         value={values.event}
          style={styles.username}
          placeholder="Event title"
          placeholderTextColor={'#9FA5C0'}></TextInput>
      </View>
      <View style={styles.inputbox}>
        <TextInput
         onChangeText={handleChange('location')}
         onBlur={handleBlur('location')}
         value={values.location}
          style={styles.username}
          placeholder="Location"
          placeholderTextColor={'#9FA5C0'}></TextInput>
      </View>

      <View style={styles.eventstrt}>
        <Text style={styles.eventstrttext}>Event Start</Text>
        <View style={styles.eventenddate}>
          <TouchableOpacity onPress={() => setOpen(true)}>
            <Text style={styles.eventendyearstyle}>
              {date?.toLocaleDateString()} {">"}
               
            </Text>
            <DatePicker
              modal
              open={open}
              date={date}
              mode="date"
              onConfirm={date => {
                setOpen(false);
                setDate(date);
                handle_eventstrt(date)

              }}
              onCancel={() => {
                setOpen(false);
              }}
              value={eventstrt}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setOpenHrs(true)}>
            <Text style={styles.eventendtimestyle}>
              {time.getHours()}:{time.getMinutes()}
            </Text>
            <DatePicker
              modal
              mode="time"
              open={openHrs}
              date={Hrs}
              onConfirm={date => {
                setOpenHrs(false);
                setHrs(date);
                handle_eventstrttime(date)
              }}
              onCancel={() => {
                setOpenHrs(false);
              }}
              value={eventstrttime}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.eventend}>
        <Text style={styles.eventendtext}>Event End</Text>

        <View style={styles.eventenddate}>
          <TouchableOpacity onPress={() => setshowend(true)}>
            <Text style={styles.eventendyearstyle}>
              {datee.toLocaleDateString()} {">"}
            </Text>
            <DatePicker
              modal
              open={showend}
              date={dateend}
              mode="date"
              onConfirm={date => {
                setshowend(false);
                setDateend(date);
                handle_eventend(date)
              }}
              onCancel={() => {
                setshowend(false);
              }}
              value={eventend}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setOpenend(true)}>
            <Text style={styles.eventendtimestyle}>
              {timeend.getHours()}:{timeend.getMinutes()}
            </Text>
            <DatePicker
              modal
              mode="time"
              open={openend}
              date={Hrsend}
              onConfirm={date => {
                setOpenend(false);
                setHrsend(date);
                handle_eventendtime(date)
              }}
              onCancel={() => {
                setOpenend(false);
              }}
              value={eventendtime}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* <View style={styles.Btnview}>
        <TouchableOpacity disabled={!isValid} style={styles.btn} onPress={() => setshowmodal(true)}>
          <Text style={styles.btntext}></Text>
        </TouchableOpacity>
        
      </View> */}
      <TouchableOpacity  disabled={!isValid} onPress={()=>{handleSubmit();
      // setshowmodal(true)
    }
      }>
        <View style={[styles.Btnview,{  backgroundColor:isValid? '#0E99E7':'#F5F5F5'}]}>
          <Text style={[styles.btntext,{ color:isValid? 'white':'#DADCE1'}]}>CREATE EVENT</Text>
        </View>
      </TouchableOpacity>
    </View>
      )}
      </Formik>
  );
};
export default CreateEvent;
