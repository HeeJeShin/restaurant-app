import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { MyPageStackParamList } from '../../navigation/types';
import { useAuthStore } from '../../stores/useAuthStore';
import { spacing } from '../../theme';

type Props = NativeStackScreenProps<MyPageStackParamList, 'MyPage'>;

export function MyPageScreen({ navigation }: Props) {
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <Button title="프로필 수정" onPress={() => navigation.navigate('ProfileEdit')} />
      ) : (
        <Button title="로그인" onPress={() => navigation.navigate('Login')} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: spacing.lg },
});
