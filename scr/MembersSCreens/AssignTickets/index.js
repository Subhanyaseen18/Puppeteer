import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
 const AssignTicket=(props)=> {
  return (
    <View style={styles.Container}>
   <View style={styles.Backarow}>
        <Text
          style={{marginRight: 300}}
          onPress={() =>props.navigation.navigate('AllMember')}>
          <Image
            style={{tintColor: '#3F414E'}}
            source={require('../../Images/arow.png')}
          />
        </Text>
        </View>
    <View style={styles.Heading}>
        <Text style={styles.Headingtext}>Assign tickets</Text>
       
      </View>
      <TouchableOpacity onPress={()=>props.navigation.navigate('AddMember')}>
            <View style={styles.Btnview}>
              <Text  style={styles.btntext}>ASIGN TICKET</Text>
            </View>
          </TouchableOpacity>
    </View>
  )
}
export default AssignTicket;