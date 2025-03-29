import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
type Props ={
    text?:string;
    onPress?: () => void;
}

const MyButton = ({text, onPress}:Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style = {styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    container:{
       backgroundColor: 'lightblue',
       paddingHorizontal: 32,
       paddingVertical: 4,
       alignSelf: 'flex-start',
       borderRadius:8,
    },
    text:{
         fontSize: 20,
         color: 'white',
    }
})
export default MyButton