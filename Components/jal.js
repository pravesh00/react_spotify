import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View,Button } from 'react-native';


const Jal =()=>{

    const [name, setName] = useState('Jai');
    return(
        <View>
            <Text>Hello {name}</Text>
            <Button title="Change" onPress={()=>{
                setName('Ravi');
            }}></Button>
        </View>
  
    );
  }

export default Jal;