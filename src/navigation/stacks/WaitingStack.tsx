import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WaitingListScreen } from '../../screens/waiting/WaitingListScreen';
import { WaitingDetailScreen } from '../../screens/waiting/WaitingDetailScreen';
import type { WaitingStackParamList } from '../types';

const Stack = createNativeStackNavigator<WaitingStackParamList>();

export function WaitingStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WaitingList" component={WaitingListScreen} options={{ title: '웨이팅' }} />
      <Stack.Screen name="WaitingDetail" component={WaitingDetailScreen} options={{ title: '웨이팅 상세' }} />
    </Stack.Navigator>
  );
}
