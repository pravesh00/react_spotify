import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, TextInput, View,Button, TouchableOpacity,svg,path,Svg,Path } from 'react-native';
import Jal from './Components/jal';
import Svg from 'react-native-svg';





export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.brand}>Konnectify</Text>
      <TextInput style={styles.textfield}></TextInput>
      <TextInput style={styles.textfield} secureTextEntry={true}></TextInput>
      <TouchableOpacity style={styles.btnstyle}><Text style={styles.btnText}>Submit</Text></TouchableOpacity>
      <Svg height="50%" width="50%" viewBox="0 0 100 100">
          <Circle
            cx="50"
            cy="50"
            r="45"
            stroke="blue"
            strokeWidth="2.5"
            fill="green"
          />
          <Rect
            x="15"
            y="15"
            width="70"
            height="70"
            stroke="red"
            strokeWidth="2"
            fill="yellow"
          />
        </Svg>
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
