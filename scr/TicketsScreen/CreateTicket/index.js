import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';



const CreateTicket = ({navigation}) => {
    const [Select,SetSelect]=useState([
      {
        id:0,
        img: require('../../Images/logo.png'),
        name: 'Paid',
        Selected:false
      },
      {
        id:1,
        img: require('../../Images/logo.png'),
        name: 'Free',
        Selected:true
      },
    ])

    const HandleOnpress =ind=>{

   const Newitem= [...Select];


 let h =  Newitem.findIndex(item => item.Selected )

 if(h > -1){
  Newitem[h].Selected = false
 }
      // Select .map((item,index)=>{
      //   if(index==ind){
      //   Newitem.push(true);
      //   }else{
      //     Newitem.push(false);
      //   }
      // })

  Newitem[ind] = { 
    ...Newitem[ind],
    Selected: true
  }



  //  Select.map((val,index)=>{
  //   console.log(item,'djdj')
  //   if(val==item){
     
  //     return{...val,Selected:!val.Selected}
  //   }
  //   else {
  // return val;
  //   }
  //  })
  SetSelect([...Newitem])
   }

   let a = Select.filter(item => item.Selected)

  
   

  let numColumns = 5;
  return (
    <View style={styles.Container}>
      <View style={styles.Backarow}>
        <Text
          style={{marginRight: 300}}
          onPress={() => navigation.navigate('EmptyTicket')}>
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
        <Text style={styles.Heading2text1}>CATEGORY</Text>
        <Text style={styles.Heading2text2}>1/4</Text>
      </View>
      <Image
        style={styles.categryimg}
        source={require('../../Images/categoryline.png')}
      />
      <View style={styles.styletextview}>
        <Text style={styles.styletext1}>
          Select the best description of this {'\n'} ticket category.
          
        </Text>
      </View>

      <View style={styles.styleticketview}>
        <View style={styles.dolrimg}>
          <Image  source={require('../../Images/dolrlogo.png')} />
        </View>
        <View style={styles.styleticketview2}>
          <Text style={styles.styleticket}>{a[0].name}</Text>
          <Text style={styles.styletickettext}>
            
            Tickets that you intend to exchange {'\n'} for money
          </Text>
        </View>
      </View>

      <View>
        
          <FlatList
            numColumns={numColumns}
            horizontal={false}
            contentContainerStyle={{
              flexDirection: 'row',
              flexDirection: 'row-reverse',
            }}
            data={Select}
            keyExtractor={item=>item.id}
            renderItem={({item,index}) => {
              console.log('jfjcccnfjfnfj', item, index);
              return (
                <TouchableOpacity onPress={()=>HandleOnpress(index)} 
                style={[styles.box,{borderColor:item.Selected ?'#0E99E7':'#D0DBEA'}]}>
                  <View style={styles.boximg}>
                    <Image style={{tintColor:item.Selected?'#0E99E7':'#D0DBEA'}}  source={item.img} />
                    <Text style={[styles.itemname,{color:item.Selected?'#0E99E7':'#D0DBEA'}]}>{item.name}</Text>
                  </View>
                  
                </TouchableOpacity>
              );
            }}
          />
        </View>

      
     

      <TouchableOpacity
        onPress={() => navigation.navigate('TicketDes')}
        style={[styles.btnview, a.length > 0 ? {backgroundColor: '#0E99E7'} : {backgroundColor:'#F3F3F4'}]}
        >
        <Text style={styles.btntext}> NEXT</Text>
        <Image
          style={styles.arrowimg}
          source={require('../../Images/arrowright.png')}
        />
      </TouchableOpacity>
    </View>
  );
};
export default CreateTicket;
