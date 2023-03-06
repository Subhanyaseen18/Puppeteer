import {Text, View, Image, TouchableOpacity, Modal} from 'react-native';
import React, {Component, useState} from 'react';
import {styles} from './style';

const TicketView = props => {
  const [show, setshow] = useState(false);
  const [showmodal, setshowmodal] = useState(false);
  return (
    <View style={styles.Container}>

<View>
        <Modal transparent={true} visible={showmodal}>
          <View style={styles.modal1style}>
            <View style={styles.modal1style1}>
              
              <View style={styles.modal1heading}>
                <Text style={styles.modal1heading1}>
                Edit Category
                </Text>
              </View>
              <Text style={styles.modaltext}>Category</Text>
              <View style={styles.modalbox}>
                <Text style={styles.modalboxtext}>Paid</Text>
               <TouchableOpacity>
               <Image
                  style={styles.showimg}
                  source={require('../../Images/open.png')}
                />
               </TouchableOpacity>
              </View>
              <View style={{flexDirection:'row',marginTop:35}}>
              <TouchableOpacity
                onPress={() => setshowmodal(false)}
                style={styles.modal1btntouch}
              >
                <View style={styles.modal1btnview}>
                  <Text style={styles.modal1btntext}>CANCEL</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                
                // onPress={() =>props. navigation.navigate('')}
                >
                <View style={styles.modal1btnview1}>
                  <Text style={styles.modal1btn1text}>UPDATE</Text>
                </View>
              </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>




      <View>
        <Modal transparent={false} visible={show}>
          <View style={styles.modalstyle}>
            <View style={styles.modalstyle1}>
              <View style={styles.img}>
                <Image
                  style={styles.tickimg}
                  source={require('../../Images/tick.png')}
                />
              </View>
              <View style={styles.modalheading}>
                <Text style={styles.modalheading1}>
                  Ticket created {'\n'} successfully
                </Text>
              </View>
              <TouchableOpacity
                style={{paddingLeft: 30, paddingRight: 30}}
                onPress={() =>props. navigation.navigate('EmptyTicket')}>
                <View style={styles.modalbtnview}>
                  <Text style={styles.modalbtntext}>Back to ticket screen</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      <View style={styles.Backarow}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('TicketQuantity')}>
          <Image
            style={{tintColor: '#3F414E'}}
            source={require('../../Images/arow.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.Heading}>
        <Text style={styles.Headingtext}>Confirm</Text>
      </View>
      <View style={styles.styletextview}>
        <Text style={styles.styletext1}>
          Share some detail about your event
        </Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.boxtext}>Category</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.boxtextpaid}>Paid</Text>
          <TouchableOpacity
          onPress={() => setshowmodal(true)}
          >
            <Image source={require('../../Images/editlogo.png')} />
          </TouchableOpacity>
        </View>
        <Text style={styles.boxtext}>Description</Text>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.boxtextvip}>VIP</Text>
          <TouchableOpacity>
            <Image source={require('../../Images/editlogo.png')} />
          </TouchableOpacity>
        </View>
        <Text style={styles.boxtext}>Cost</Text>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.boxtexteachticket}>
            Each Ticket costs BBD
            <Text style={{color: '#0E99E7'}}> $200.00</Text>
          </Text>
          <TouchableOpacity>
            <Image source={require('../../Images/editlogo.png')} />
          </TouchableOpacity>
        </View>
        <Text style={styles.boxtext}>Quantity </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.boxtextreqticket}>You requested 200 tickets</Text>
          <TouchableOpacity>
            <Image source={require('../../Images/editlogo.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => setshow(true)}>
        <View style={styles.Btnview}>
          <Text style={styles.btntext}>Confirm ticket information</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default TicketView;
