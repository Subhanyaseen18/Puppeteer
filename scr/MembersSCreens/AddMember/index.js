import { View, Text,Image,TouchableOpacity ,TextInput,Button,ScrollView} from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'

import PopupGender from '../../PopupModal'

const AddMember=(props)=> {

  const [showModal, setShowModal] = useState(false)
  const [selectedValue, setSelectedValue] = useState("Prefer not to say")

  return (
    <ScrollView style={styles.Container}>
      {/* <Button onPress={() => props.data()} title="click" /> */}
    <View style={styles.Backarow}>
         <Text
           style={{marginRight: 300}}
           onPress={() =>props.navigation.navigate('AssignTicket')}>
           <Image
             style={{tintColor: '#3F414E'}}
             source={require('../../Images/arow.png')}
           />
         </Text>
         </View>
     <View style={styles.Heading}>
         <Text style={styles.Headingtext}>Add member detail</Text>
        
       </View>
      <View style={styles.box1}>
          <TextInput style={styles.box1text}
          placeholder='Full name'
           placeholderTextColor={'#9FA5C0'}
          >

          </TextInput>
      </View>
      <View style={styles.box1}>
          <TextInput style={styles.box1text}
          placeholder='Email'
           placeholderTextColor={'#9FA5C0'}
          >

          </TextInput>
      </View>
      <View style={styles.inputbox}>
     
        <TextInput style={styles.stylegndr} 
        placeholder="Gender"
        placeholderTextColor={'#9FA5C0'}
        ></TextInput>
        <Text onPress={() => setShowModal(true)}  style={styles.stylegndrtext}>{selectedValue}</Text>
       <TouchableOpacity  onPress={() => setShowModal(true)}>
       <Image style={styles.imgusername} 
      source={require('../../Images/selectgndrlogo.png')}/>
       </TouchableOpacity>

      </View>

      <View style={styles.box1}>
          <TextInput style={styles.box1text}
          placeholder='Phone number'
           placeholderTextColor={'#9FA5C0'}
          >

          </TextInput>
      </View>
      <View style={styles.box1}>
          <TextInput style={styles.box1text}
          placeholder='Password'
           placeholderTextColor={'#9FA5C0'}
          >

          </TextInput>
      </View>
      

       <TouchableOpacity>
             <View style={styles.Btnview}>
               <Text  style={styles.btntext}>SAVE MEMBER DETAIL</Text>
             </View>
           </TouchableOpacity>

           <PopupGender visible={showModal} onClose={() => setShowModal(false)} setSelectedValue={(text) => setSelectedValue(text) }   />
    </ScrollView>
  )
}
export default AddMember;