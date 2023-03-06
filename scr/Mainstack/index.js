import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useIsFocused} from '@react-navigation/native';

import Login from '../LoginScreen';
import Account from '../NewAccount';
import Country from '../Country';
import ForgotScreen from '../Forgot';
import OTP from '../Forgototp';
import Home from '../DashboardScreens/HomeSreen';
import Event from '../DashboardScreens/EventScreen';
import CreateEvent from '../DashboardScreens/CreateEvent';
import EmptyTicket from '../TicketsScreen/EmptyTicket';
import CreateTicket from '../TicketsScreen/CreateTicket';
import TicketDes from '../TicketsScreen/Create Ticket description';
import TicketCost from '../TicketsScreen/TicketCost';
import TicketQuantity from '../TicketsScreen/TicketQuantity';
import TicketView from '../TicketsScreen/TicketView';
import AllMember from '../MembersSCreens/AllMember';
import AssignTicket from '../MembersSCreens/AssignTickets';
import AddMember from '../MembersSCreens/AddMember';
import Profile from '../ProfileScreen/Profile';
import EditProfile from '../ProfileScreen/EditProfile';
import SelectTicket from '../TicketsScreen/Customer/Select tickets';
import Paymentrecord from '../TicketsScreen/Customer/Paymentrecord';
import Invoice from '../TicketsScreen/Customer/Invoice';

import CustomerDetail from '../TicketsScreen/Customer/CustomerDetail';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();
const Screen = () => {
  const {token} = useSelector(state => state.user);
  //
  return (
    <NavigationContainer>
      <Stack.Navigator
        //  initialRouteName='Forgototp'
        screenOptions={{headerShown: false}}>
        {/* {token == null ? ( */}
        <>
          <Stack.Screen name="Login" component={Login}></Stack.Screen>

          <Stack.Screen name="NewAccount" component={Account}></Stack.Screen>
          <Stack.Screen name="Country" component={Country}></Stack.Screen>
          <Stack.Screen name="Forgot" component={ForgotScreen}></Stack.Screen>
          <Stack.Screen name="Forgototp" component={OTP}></Stack.Screen>
        </>
        {/* ) : ( */}
        <Stack.Screen name="F" component={Mainstack}></Stack.Screen>
        {/* )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const Mainstack = () => {
  const focused = useIsFocused();
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,

        tabBarActiveTintColor: '#2E3E5C',
        tabBarInactiveTintColor: '#C8CCD3',
        tabBarLabelStyle: {marginBottom: 2},
      })}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreens}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              resizeMode="cover"
              source={
                focused
                  ? require('../Images/Dashboard.png')
                  : require('../Images/Dashboardlight.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tickets"
        component={TicketsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              resizeMode="cover"
              source={
                focused
                  ? require('../Images/ticlogo.png')
                  : require('../Images/ticketlight.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Members"
        component={MembersScreens}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              resizeMode="cover"
              source={
                focused
                  ? require('../Images/mumberlogo.png')
                  : require('../Images/memberlight.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreens}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              resizeMode="cover"
              source={
                focused
                  ? require('../Images/profilelogo.png')
                  : require('../Images/Profilelight.png')
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const DashboardScreens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
      <Stack.Screen name="Event" component={Event}></Stack.Screen>
      <Stack.Screen name="CreateEvent" component={CreateEvent}></Stack.Screen>
    </Stack.Navigator>
  );
};
const TicketsScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="EmptyTicket" component={EmptyTicket}></Stack.Screen>
      <Stack.Screen name="CreateTicket" component={CreateTicket}></Stack.Screen>
      <Stack.Screen name="TicketDes" component={TicketDes}></Stack.Screen>
      <Stack.Screen name="TicketCost" component={TicketCost}></Stack.Screen>
      <Stack.Screen
        name="TicketQuantity"
        component={TicketQuantity}></Stack.Screen>
      <Stack.Screen name="TicketView" component={TicketView}></Stack.Screen>
      <Stack.Screen
        name="CustomerDetail"
        component={CustomerDetail}></Stack.Screen>
      <Stack.Screen
        name="Paymentrecord"
        component={Paymentrecord}></Stack.Screen>
      <Stack.Screen name="SelectTicket" component={SelectTicket}></Stack.Screen>
      <Stack.Screen name="Invoice" component={Invoice}></Stack.Screen>
    </Stack.Navigator>
  );
};
const MembersScreens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AllMember" component={AllMember}></Stack.Screen>
      <Stack.Screen name="AssignTicket" component={AssignTicket}></Stack.Screen>
      <Stack.Screen name="AddMember" component={AddMember}></Stack.Screen>
    </Stack.Navigator>
  );
};

const ProfileScreens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
      <Stack.Screen name="EditProfile" component={EditProfile}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default Screen;
