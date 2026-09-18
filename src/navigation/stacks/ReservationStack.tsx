import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RestaurantListScreen } from '../../screens/reservation/RestaurantListScreen';
import { RestaurantDetailScreen } from '../../screens/reservation/RestaurantDetailScreen';
import { ReservationFormScreen } from '../../screens/reservation/ReservationFormScreen';
import { ReservationConfirmScreen } from '../../screens/reservation/ReservationConfirmScreen';
import { MyReservationsScreen } from '../../screens/reservation/MyReservationsScreen';
import type { ReservationStackParamList } from '../types';

const Stack = createNativeStackNavigator<ReservationStackParamList>();

type MyReservationsButtonProps = {
  navigation: NativeStackScreenProps<ReservationStackParamList, 'RestaurantList'>['navigation'];
};

function MyReservationsButton({ navigation }: MyReservationsButtonProps) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('MyReservations')}>
      <Text style={styles.headerButtonText}>내 예약</Text>
    </TouchableOpacity>
  );
}

export function ReservationStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RestaurantList"
        component={RestaurantListScreen}
        options={({ navigation }) => ({
          title: '식당 목록',
          headerRight: () => <MyReservationsButton navigation={navigation} />,
        })}
      />
      <Stack.Screen name="RestaurantDetail" component={RestaurantDetailScreen} options={{ title: '식당 상세' }} />
      <Stack.Screen name="ReservationForm" component={ReservationFormScreen} options={{ title: '예약하기' }} />
      <Stack.Screen
        name="ReservationConfirm"
        component={ReservationConfirmScreen}
        options={{ title: '예약 완료' }}
      />
      <Stack.Screen name="MyReservations" component={MyReservationsScreen} options={{ title: '내 예약' }} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerButtonText: { color: '#007AFF' },
});
