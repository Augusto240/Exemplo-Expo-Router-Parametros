import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function DetalhesScreen() {
  const params = useLocalSearchParams();
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confira os dados informados:</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.value}>{params.nome}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{params.email}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Idade:</Text>
        <Text style={styles.value}>{params.idade}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  infoContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    color: '#666',
  },
  value: {
    fontSize: 20,
    fontWeight: '500',
  },
});