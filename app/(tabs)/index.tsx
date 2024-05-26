import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        My name is <Text style={styles.boldText}>Bright Amoani-Yeboah</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue' ,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {color: 'white' ,
    fontSize: 24,
  },
  boldText: {
    fontWeight: 'bold',
  },
});
