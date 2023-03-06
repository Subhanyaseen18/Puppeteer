import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import {store} from './scr/Apis/store/index'






import Mainstack from './scr/Mainstack'

const App= ()=> {
  return (
    <Provider store={store}>
    
     <Mainstack/>

    </Provider>
  )
}
export default App;