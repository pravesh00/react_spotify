import * as React from 'react';
import {useState} from 'react';
import { FlatList, StyleSheet, Text, TextInput, View,Button, TouchableOpacity,svg,path,Svg,Path,ScrollView ,map} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { add, exp } from 'react-native-reanimated';

const Todo=(props)=>{
  return(
    <View>
  <Text style={styles.textfield}>{props.item}</Text>
  <Button onPress={()=>{props.delete(props.item)}} title='Delete'></Button>
  </View>
 )
}

const ProfileScreen=(props)=>{
  
      const [text,setText]=useState('')
      const [list,setList]=useState(['a','b'])

      const addItem=()=>{
        const updatedList =list;
        updatedList.push(text);
        setList(updatedList);
        setText('');
      }

      const deleteItem=(index)=>{
        const updatedList =list.filter((todo)=>{todo!==index});
        setList(updatedList);
      }
        return(
            <View style={styles.container}>
            <Text style={styles.textfield}>Profile Page</Text>
            
            <ScrollView>
              {list.map( (x,index) =><Todo key={index} delete={deleteItem} index={index} style={styles.textfield} item={x}></Todo>) }
            </ScrollView>
            <View>
            <TextInput style={styles.textfield} onChangeText={(text)=>setText(text)} value={text}></TextInput>
            <Button onPress={addItem} title="Click ME">
            </Button>
            </View>
          </View>
          
        )
  
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
      color:'#107EE4',
      fontStyle:'normal'
    },
    textfield:{
      width:250,
      marginTop:20,
      textAlign:'center',
      marginTop:3,
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

  export default ProfileScreen;

  