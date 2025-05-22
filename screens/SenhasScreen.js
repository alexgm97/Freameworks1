import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function SenhasScreen({ route }) {
  const { senhas } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Senhas Geradas</Text>
      <FlatList
        data={senhas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    fontSize: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});