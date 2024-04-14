import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; 



const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.blueBox}>
        <Text style={styles.text}>Hello, world!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueBox: {
    width: 200,
    height: 100,
    backgroundColor: '#007bff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});

export default App;