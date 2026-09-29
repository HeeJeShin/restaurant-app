import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ReservationStackParamList } from '../../navigation/types';
import { colors } from '../../theme';

type Props = NativeStackScreenProps<ReservationStackParamList, 'ReservationConfirm'>;

export function ReservationConfirmScreen({ route }: Props) {
  const { reservationId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>예약 완료 (준비 중) · reservationId: {reservationId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 16, color: colors.textSecondary },
});
