import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useRestaurantsQuery } from '../../queries/restaurants/useRestaurantsQuery';
import type { ReservationStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<ReservationStackParamList, 'RestaurantList'>;

export function RestaurantListScreen({ navigation }: Props) {
  const { data, isLoading } = useRestaurantsQuery();

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.row}
          onPress={() => navigation.navigate('RestaurantDetail', { restaurantId: item.id })}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.category}>{item.category}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  list: { padding: 16 },
  row: { paddingVertical: 12, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#ddd' },
  name: { fontSize: 16, fontWeight: '600' },
  category: { fontSize: 13, color: '#888', marginTop: 2 },
});
