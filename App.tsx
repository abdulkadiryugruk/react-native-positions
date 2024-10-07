/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView, 
  StyleSheet,
  View,

} from 'react-native';

const App = () => {
  return <SafeAreaView style={styles.background}>

    <View style={{width:150, height:175, backgroundColor:'purple', position:'absolute', top:40, left:40, zIndex:4}}></View>
    <View style={{width:150, height:175, backgroundColor:'yellow', position:'absolute', top:80, left:80, zIndex:3}}></View>
    <View style={{width:150, height:175, backgroundColor:'orange', position:'absolute', top:100, left:100, zIndex:2}}></View>

  </SafeAreaView>;
};
const styles = StyleSheet.create({
  background: {
    backgroundColor: 'brown',
    flex: 1,
    flexDirection:'row',
  },
});

export default App;
