import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyPageScreen } from '../../screens/mypage/MyPageScreen';
import { LoginScreen } from '../../screens/mypage/LoginScreen';
import { ProfileEditScreen } from '../../screens/mypage/ProfileEditScreen';
import type { MyPageStackParamList } from '../types';

const Stack = createNativeStackNavigator<MyPageStackParamList>();

export function MyPageStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyPage" component={MyPageScreen} options={{ title: '마이페이지' }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: '로그인' }} />
      <Stack.Screen name="ProfileEdit" component={ProfileEditScreen} options={{ title: '프로필 수정' }} />
    </Stack.Navigator>
  );
}
