import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {styles} from './style';
const AllMember = (props) => {
  const [index,setindex]=useState(0)

  

  return (
    <View style={styles.Container}>
      <View style={styles.addview}>
        <TouchableOpacity onPress={() =>props. navigation.navigate('AssignTicket')}>
          <Image
            style={styles.Imgaddevent}
            source={require('../../Images/addevent.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.Heading}>
        <Text style={styles.Headingtext}>Members</Text>
      </View>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={()=>setindex(0)}>
        <View style={[styles.btnview1,{backgroundColor:index==0?"#0E99E7":"white"}]}>
        
            <Text style={[styles.btntext1,{color:index==0?"white":"black"}]}>All</Text>
         
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setindex(1)}>
        <View style={[styles.btnview2,{backgroundColor:index==1?"#0E99E7":"white"}]}>
          
            <Text style={[styles.btntext2,{color:index==1?"white":"black"}]}>Assigned</Text>
          
        </View>
        </TouchableOpacity>
      </View>
   
      <View>
{
index==0?
<View >
<View style={styles.imgticketlogo}>
        <Image source={require('../../Images/memberlogo.png')} />
      </View>
      <View  style={styles.tickettext}>
        <Text  style={styles.tickettext1}>No Notification</Text>
        
      </View>
</View>
:<View>

</View>
}
</View>

    </View>
  );
};


export default AllMember;
