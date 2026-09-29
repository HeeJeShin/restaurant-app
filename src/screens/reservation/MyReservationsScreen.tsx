import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { useReservationsQuery } from '../../queries/reservations/useReservationsQuery';
import { colors, spacing } from '../../theme';

export function MyReservationsScreen() {
  const { data, isLoading } = useReservationsQuery();

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
        <View style={styles.row}>
          <Text style={styles.name}>{item.restaurantName}</Text>
          <Text style={styles.meta}>
            {item.date} · {item.partySize}명
          </Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  list: { padding: spacing.lg },
  row: { paddingVertical: spacing.md, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.border },
  name: { fontSize: 16, fontWeight: '600' },
  meta: { fontSize: 13, color: colors.textMuted, marginTop: 2 },
});
