import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { FlatList, StyleSheet, Text, TextInput, View,Button, TouchableOpacity,svg,path,Svg,Path } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Components/HomeScreen';

const Stack= createStackNavigator();





export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home"
        component={HomeScreen}
        options={{title:"Home"}}
        >

        </Stack.Screen>
        <Stack.Screen
        name="Profile"
        component={ProfileScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


const ProfileScreen=({navigation})=>{
  return(
    <View style={styles.container}>
      <Text style={styles.brand}>Profile Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:"center",
    flex: 1,
    justifyContent:'center',
    backgroundColor: '#fff'
  },
  brand:{
    fontSize:32,
    fontFamily:'Sans-Serif',
    color:'#107EE4',
    fontStyle:'normal'
  },
  textfield:{
    width:250,
    marginTop:20,
    height:50,
    paddingLeft:10,
    borderColor:'#10D8E4',
    borderWidth:1,
    borderRadius:7,
  },
  btnstyle:{
    marginTop:20,
    width:139,
    marginTop:30,
    height:41,
    alignItems:'center',
    borderRadius:7,
    borderColor:'#7FA866',
    borderWidth:1,
    backgroundColor:'#EFE5E5'
},
btnText:{
  textAlign:'center',
  marginTop:3,
  width:139,
  height:50,
  fontWeight:"500",
  fontSize:22,
  opacity:0.5,

}
});
