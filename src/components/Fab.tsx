import React from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';

interface Props {
  title: String;
  onPress: () => void;
  position?: 'br' | 'bl';
}

const Fab = ( {title, onPress, position= 'br'}: Props) => {



  return (
    <View
    style={
      [
        styles.fabLocation, 
        (position === 'bl') ? styles.left : styles.right
      ]
       
    }
    >
        <TouchableNativeFeedback
      
        onPress={ onPress}
        background={TouchableNativeFeedback.Ripple('black', false, 30)}

      >
        <View style={styles.fab}>
          <Text style = {styles.fabText}>{title}</Text>
        </View>
        
      </TouchableNativeFeedback>
    </View>
    
  );
}

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
        
      },
      right: {
        right: 25
      },
      left:{
        left: 25
      },
     fab:{
        backgroundColor:'#5856D6',
        width: 55,
        height: 55,
        borderRadius:100,
        shadowOffset:{
          width: 0,
          height: 4
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation:2
      },
      fabText: {
          color: 'white',
          fontSize:30,
          fontWeight: 'bold',
          alignSelf: 'center'
      }
})

export default Fab;
