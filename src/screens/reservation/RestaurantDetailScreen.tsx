import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ReservationStackParamList } from '../../navigation/types';
import { colors, spacing } from '../../theme';

type Props = NativeStackScreenProps<ReservationStackParamList, 'RestaurantDetail'>;

export function RestaurantDetailScreen({ route, navigation }: Props) {
  const { restaurantId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>식당 상세 (준비 중) · id: {restaurantId}</Text>
      <Button title="예약하기" onPress={() => navigation.navigate('ReservationForm', { restaurantId })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: spacing.lg },
  text: { fontSize: 16, color: colors.textSecondary },
});
