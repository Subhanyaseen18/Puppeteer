import { View, Text ,Image,TouchableOpacity,PermissionsAndroid,Modal} from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { widthPercentageToDP } from 'react-native-responsive-screen'



 const EditProfilescreen=(props) =>{

  const [show, setshow] = useState(false);

const [cameraphoto,setcameraphoto]=useState()
const [glryphoto,setglryphoto]=useState()
//  const[showimg,setshowimg]=useState([
//   {
//     id:1,
//     img:
//   }
//  ])
  let options = {
    saveToPhotos:true,
    mediaType:'photo',  
  } 
  
  const openCemra = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted == PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      console.log(result)
      setcameraphoto(result.assets[0].uri);
    }
  };
 const opengallery=async()=>{
  const result = await launchImageLibrary(options);
  setglryphoto(result.assets[0].uri);
 }

// const openCemra=()=>{
//   let options={
//     storageOptions:{},
//   }
//   launchCamera(options,{Response})
// }


  return (
    <View style={styles.Container}>
  <View>
        <Modal transparent={false} visible={show}>
          <View style={styles.modalstyle}>
            <View style={styles.modalstyle1}>
              
              
              <TouchableOpacity style={{paddingLeft:30,paddingRight:30}} onPress={() => 
                {
                  setshow(false)
                  openCemra()
                  // navigation.navigate('F')
                }}
                >
                <View style={styles.modalbtnview}>
                  <Text style={styles.modalbtntext}>IMAGE FROM CAMERAROLL</Text>
                </View>
              </TouchableOpacity>
                
              <TouchableOpacity style={{paddingLeft:30,paddingRight:30}} onPress={() => 
                {
                  setshow(false)
                  opengallery()
                  // navigation.navigate('F')
                }}
                >
                <View style={styles.modalbtnview}>
                  <Text style={styles.modalbtntext}>IMAGE FROM GALLERY</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{paddingLeft:30,paddingRight:30}} onPress={() => 
                {
                  setshow(false)
                 
                  // navigation.navigate('F')
                }}
                >
                <View style={styles.modalbtnview}>
                  <Text style={styles.modalbtntext}>Cancel</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>







    <View style={styles.Backarow}>
      <TouchableOpacity
        style={{marginRight: 300}}
        onPress={() =>props. navigation.navigate('Profile')}>
        <Image
          style={{tintColor: '#3F414E'}}
          source={require('../../Images/arow.png')}
        />
      </TouchableOpacity>
    </View>
    <View style={styles.heading}>
        <Text style={styles.headingtext1} >Edit Profile</Text>
        </View>
        <View style={{alignSelf:'center',flexDirection:'row'}}>
          <Image
          style={{
            // position:'absolute',
            width: 150,
            height: 150,
            borderRadius: 150 / 2,
            overflow: "hidden",
            borderWidth: 3,
            borderColor: "white"
           }}
            source={require('../../Images/profilepic.png')}
          />
           <Image style={styles.styleprofile} 
            source={{uri:cameraphoto}}/>
         <Image style={styles.styleprofile}  source={{uri:glryphoto}}/>
          <TouchableOpacity 
          onPress={()=>setshow(true)}
          //  onPress={()=>openCemra()} 
          style={{marginTop:90,position: 'absolute',marginLeft:105}}>

          <Image
         
            source={require('../../Images/cemralogo.png')}
          />

          </TouchableOpacity>
         <View >
        
         
         </View>
        </View>
       
<View style={styles.box}>
<Text style={styles.boxtext}>
Roger Westervelt
</Text>
</View>
<TouchableOpacity 
//  onPress={() => navigation.navigate('Country')} 
style={styles.btn}>
      <View style={styles.Btnview}>
       
          <Text style={styles.btntext}>UPDATE PROFILE</Text>
       
      </View>
      </TouchableOpacity>
    </View>
  )
}
export default EditProfilescreen