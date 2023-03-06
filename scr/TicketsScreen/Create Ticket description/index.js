import {View, Text, Image, TouchableOpacity,Switch,Button} from 'react-native';
import PopupGender from '../../PopupModal'
import React,{useState}from 'react';
import {styles} from './style';




const TicketDes = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => 
    setIsEnabled(previousState => !previousState);
  const [showModal, setShowModal] = useState(false)
  const [selectedValue, setSelectedValue] = useState("Prefer not to say");
 
  return (
    <View style={styles.Container}>
      
    
      <View style={styles.Backarow}>
        <Text
          style={{marginRight: 300}}
          onPress={() =>props. navigation.navigate('CreateTicket')}>
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
        <Text style={styles.Heading2text1}>DESCRIPTION</Text>
        <Text style={styles.Heading2text2}>2/4</Text>
      </View>
      <Image
        style={styles.categryimg}
        source={require('../../Images/desline.png')}
      />
      <View style={styles.styletextview}>
        <Text style={styles.styletext1}>
          Give it a name. Name help you distinguish{'\n'}
          this ticket type from others.
        </Text>
      </View>
      <View  style={styles.styleticketnameview}>
        <Text  style={styles.styleticketname}>Ticket name</Text>
      </View>
      <View style={styles.styleBox}>
       <Text style={styles.styleBoxtext}>e.g VIP Early Birds</Text>
      </View>
<View style={styles.stylebtn}>
  <Text style={styles.stylegndrtext}>Gender Specific?</Text>
 
   
  <Switch
   trackColor={{ false: "#9FA5C0", true: "#0E99E7" }}
   thumbColor={isEnabled ? "#0E99E7" : "#f4f3f4"}
   ios_backgroundColor="#3e3e3e"
   onValueChange={toggleSwitch}
   value={isEnabled}
  />
 
</View>


<Text style={{color:'#9FA5C0'}}>In case the gender affects the cost</Text>



      {isEnabled ? 
      <View  style={styles.showmodalbox}> 
      <Text style={styles.showmodalboxtext}  onPress={() => setShowModal(true)}>
    {  selectedValue}
      </Text>
      <TouchableOpacity  onPress={() => setShowModal(true)}>
    <Image
          style={styles.imgopen}
          source={require('../../Images/open.png')}
        />
    </TouchableOpacity>

      </View>
      : <View>
        </View>
      }
   
    


<TouchableOpacity disabled={!isEnabled}
        onPress={() =>props. navigation.navigate('TicketCost')}
        style={[styles.btnview,{backgroundColor:isEnabled? '#0E99E7':'#F3F3F4'}]}>
        <Text style={[styles.btntext,{ color:isEnabled? 'white':'#DADCE1'}]}> NEXT</Text>
        <Image
          style={[styles.arrowimg,{tintColor:isEnabled? 'white':'#DADCE1'}]}
          source={require('../../Images/arrowright.png')}
        />
      </TouchableOpacity>

      <PopupGender visible={showModal} onClose={() => setShowModal(false)} setSelectedValue={(text) => setSelectedValue(text) }   />
    </View>
  );
};
export default TicketDes;
