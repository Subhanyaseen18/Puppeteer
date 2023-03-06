import {View, Text, TouchableOpacity, Image, TextInput,FlatList,ScrollView} from 'react-native';
import React, { useState } from 'react';
import {styles} from './style';
const TicketQuantity = (props) => {
   
  const [Select,SetSelect]=useState([
    {
      id:0,
      img: require('../../Images/paidlogo.png'),
      name: '50 Tickets',
      image: require('../../Images/ticklogo.png'),
      Selected:false
    },
    {
      id:1,
      img: require('../../Images/paidlogo.png'),
      name: '100 Tickets',
      image: require('../../Images/ticklogo.png'),
      Selected:false
    },
    {
      id:2,
      img: require('../../Images/paidlogo.png'),
      name: '200 Tickets',
      image: require('../../Images/ticklogo.png'),
      Selected:false
    },
    {
      id:3,
      img: require('../../Images/paidlogo.png'),
      name: '500 Tickets',
      image: require('../../Images/ticklogo.png'),
      Selected:true
    },
  ])
  const HandleOnpress =ind=>{

    const Newitem= [...Select];
 
 
  let h =  Newitem.findIndex(item => item.Selected )
 
  if(h >-3){
   Newitem[h].Selected = false
  }
      
 
   Newitem[ind] = { 
     ...Newitem[ind],
     Selected: true
   }
 
 
 
   
   SetSelect([...Newitem])
    }

  return (
    <ScrollView>
      <View style={styles.Container}>
   
      <View style={styles.Backarow}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('TicketCost')}>
          <Image
            style={{tintColor: '#3F414E'}}
            source={require('../../Images/arow.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.Heading}>
        <Text style={styles.Headingtext}>Create tickets</Text>
      </View>
      <View style={styles.Heading2}>
        <Text style={styles.Heading2text1}>Quantity</Text>
        <Text style={styles.Heading2text2}>4/4</Text>
      </View>
      <Image
        style={styles.categryimg}
        source={require('../../Images/quanline.png')}
      />
      <View style={styles.styletextview}>
        <Text style={styles.styletext1}>
          The number of tickets of this type.
        </Text>
      </View>
   
      <FlatList
           
          
           
            data={Select}
            keyExtractor={item=>item.id}
            renderItem={({item,index}) => {
            
              return (
               
                  <View style={styles.boximg}>
                    <Image  style={styles.box1img1}  source={item.img} />
                    <Text style={styles.box1text}>{item.name}</Text>
                    <TouchableOpacity onPress={()=>HandleOnpress(index)} 
                style={styles.box}>
                    <Image style={[styles.box1img2,{tintColor:item.Selected?'#0E99E7':'#D0DBEA'}]}  source={item.image} />
                    </TouchableOpacity>
                  </View>
                  

                
              );
            }}
          />
         
     <View style={styles.inputview}>
     <TextInput placeholder='Enter Type Custom quantity'  
     placeholderTextColor={'#9FA5C0'} 
     style={styles.inputtext} >
    
</TextInput>
     </View>

     <TouchableOpacity
        onPress={() =>props. navigation.navigate('TicketView')}
        style={styles.btnview}
        >
        <Text style={styles.btntext}> NEXT</Text>
        <Image
          style={styles.arrowimg}
          source={require('../../Images/arrowright.png')}
        />
      </TouchableOpacity>
   
    </View>
    </ScrollView>
    
  );
};

export default TicketQuantity;
