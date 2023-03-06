import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import {
  LineChart,
  BarChart,
 
} from 'react-native-chart-kit';
import {ForeignObject} from 'react-native-svg';

const Home = ({navigation}) => {
  const data = {
    labels: ["John", "Thomas", "Welberg", "Tom", "Fred"],
    datasets: [
      {
        data: [20, 333, 100,130, 222 ]
      }
    ]
  };
  return (
    <View style={styles.Container}>
      <View style={styles.Heading}>
        <Image
          style={styles.Imgperson}
          source={require('../../Images/person.png')}
        />
        <View>
          <Text style={styles.Headingtext1}>Hello</Text>
          <Text style={styles.Headingtext2}>Raityn Bergson</Text>
        </View>
        <Image
          style={styles.ImgBell}
          source={require('../../Images/bell.png')}
        />
        <Image
          style={styles.ImgScan}
          source={require('../../Images/Scan.png')}
        />
      </View>

      <View style={styles.Heading2}>
        <Image
          style={styles.Imgparty}
          source={require('../../Images/party.png')}
        />
        <Text style={styles.Heading2text1}>Party 1</Text>
       
        <TouchableOpacity
          onPress={() => navigation.navigate('Event')}
          style={styles.ImgEvent}>
             <Text style={styles.Heading2text2}>More events</Text>
          <Image style={{marginTop:4}} source={require('../../Images/event.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.barstylebox}>
        <Text style={styles.lineheading}>Tickets Sales</Text>
        <LineChart
          data={{
            labels: ['VIP', 'Normal', 'Business', 'Premium'],
            datasets: [
              {
                data: [12,40,50,0],
              },
            ],
          }}
          width={333} // from react-native
          height={231}
          yAxisInterval={5}
          xLabelsOffset={5}
        //  xLabelsOffset={2}
         
          chartConfig={{
            
            backgroundGradientFrom: '#FBFBFB',
            backgroundGradientTo: '#FBFBFB',
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity) => `#0E99E7`,
            labelColor: (opacity) => `#9FA5C0`,
          
            propsForDots: {
              r: '2',
              strokeWidth: '8',
              stroke: '#0E99E7',
            },
          }}
          bezier
          style={{
            marginRight:1,
            borderRadius: 16,
          //  backgroundColor:'red'
          }}
        />
      </View>
      <View style={styles.barstylebox}>
        <Text style={styles.barheading1}>Members Sales & Stats</Text>
        <Text style={styles.barheading2}>BBD $1750</Text>
<BarChart   data={data}
width={333}
height={253}

 chartConfig = {{
  backgroundGradientFrom: "#FBFBFB",
 
  backgroundGradientTo: "#FBFBFB",
  
  decimalPlaces: 0,
  color: (opacity) => `#0E99E7`,
  labelColor: (opacity) => `#9FA5C0`,
  // strokeWidth: 5, // optional, default 3
  barPercentage: 0.5,
  // useShadowColorFromDataset: false ,
  // optional
  
}}
/>

      </View>
    </View>
  );
};
export default Home;
