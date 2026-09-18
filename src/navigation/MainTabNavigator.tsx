import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackNavigator } from './stacks/HomeStack';
import { ReservationStackNavigator } from './stacks/ReservationStack';
import { WaitingStackNavigator } from './stacks/WaitingStack';
import { MyPageStackNavigator } from './stacks/MyPageStack';
import type { MainTabParamList } from './types';

const Tab = createBottomTabNavigator<MainTabParamList>();

export function MainTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="HomeTab" component={HomeStackNavigator} options={{ title: '홈' }} />
      <Tab.Screen name="ReservationTab" component={ReservationStackNavigator} options={{ title: '예약' }} />
      <Tab.Screen name="WaitingTab" component={WaitingStackNavigator} options={{ title: '웨이팅' }} />
      <Tab.Screen name="MyPageTab" component={MyPageStackNavigator} options={{ title: '마이페이지' }} />
    </Tab.Navigator>
  );
}
