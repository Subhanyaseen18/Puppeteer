import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Modal,
  Button,
} from 'react-native';
import React, {Component, useState} from 'react';

class PopupGender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pickerslection: 'default valuse',
      pikerdisply: false,
    };
  }
  pickervalue(newvalue) {
    this.setState({
      pickerslection: newvalue,
    });

    this.props.setSelectedValue(newvalue);
  }
  open() {
    this.setState({
      pikerdisply: !this.state.pikerdisply,
    });
  }

  render() {
    const pickervalue = [
      {
        title: 'Male',
        value: 'Male',
      },
      {
        title: 'Female',
        value: 'Female',
      },
      {
        title: 'Prefer not to say',
        value: 'Prefers not to say',
      },
    ];
    return (
      <View style={styles.continer}>
        <Modal
          visible={this.props.visible}
          transparent={true}
          onRequestClose={() => this.props.onClose()}>
          <View style={{backgroundColor: '#000000aa', flex: 1}}>
            <View
              style={{
                backgroundColor: '#ffffff',
                marginTop: 600,

                borderRadius: 30,
                flex: 1,
              }}>
              <Text
                style={{alignSelf: 'center', marginBottom: 20, fontSize: 30,color:'#2E3E5C',marginTop:10,fontWeight:'700'}}>
                Select gender
              </Text>
              {pickervalue.map((value, index) => {
                return (
                    <TouchableOpacity
                    style={{
                     
                                  paddingTop: 8,
                                 
                                   alignItems: 'center',
                                   
                                 }}
                      key={index}
                      onPress={() => {
                        this.pickervalue(value.value), this.props.onClose();
                      }}
                    >
                      <Text style={{fontWeight:'500',
                    fontSize:18,
                    color:"#9FA5C0"
                    }}>{value.title}</Text>
                    </TouchableOpacity>
                );
              })}

              {/* <TouchableOpacity
                  onPress={() => this.open()}
                  style={{paddingTop: 4, paddingBottom: 4, alignItems: 'center'}}>
                  <Text>Cancel</Text>
              
              </TouchableOpacity> */}
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
export default PopupGender;

const styles = StyleSheet.create({
  continer: {
    flex: 1,
  },
});
