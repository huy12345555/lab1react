import React from "react";
import { View, Button, Text, TouchableOpacity, StyleSheet } from "react-native";

export default () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Button 1" onPress={() => alert("hello!")} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("hello 2!")}
      >
        <Text style={styles.buttonText}>Button 2</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
