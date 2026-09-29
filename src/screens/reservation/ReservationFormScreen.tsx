import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ReservationStackParamList } from '../../navigation/types';
import { colors, spacing } from '../../theme';

type Props = NativeStackScreenProps<ReservationStackParamList, 'ReservationForm'>;

export function ReservationFormScreen({ route, navigation }: Props) {
  const { restaurantId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>예약 폼 (준비 중) · restaurantId: {restaurantId}</Text>
      <Button
        title="예약 완료하기"
        onPress={() => navigation.navigate('ReservationConfirm', { reservationId: 'mock-reservation-1' })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: spacing.lg },
  text: { fontSize: 16, color: colors.textSecondary },
});
