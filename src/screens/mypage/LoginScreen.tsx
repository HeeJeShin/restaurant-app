import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, radius, spacing } from '../../theme';

// 소셜로그인 SDK는 다음 세션에 연동 예정 (Firebase Auth 자격증명 준비 후):
//   Google -> @react-native-google-signin/google-signin
//   네이버 -> @react-native-seoul/naver-login
//   카카오 -> @react-native-seoul/kakao-login
//   Apple  -> @invertase/react-native-apple-authentication
const SOCIAL_PROVIDERS = ['Google', '네이버', '카카오', 'Apple'] as const;

export function LoginScreen() {
  return (
    <View style={styles.container}>
      {SOCIAL_PROVIDERS.map(provider => (
        <TouchableOpacity key={provider} style={styles.button} disabled>
          <Text style={styles.buttonText}>{provider}로 계속하기 (준비 중)</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: spacing.md, paddingHorizontal: spacing.xl },
  button: {
    width: '100%',
    paddingVertical: spacing.md,
    borderRadius: radius.md,
    backgroundColor: colors.surfaceDisabled,
    alignItems: 'center',
  },
  buttonText: { fontSize: 15, color: colors.textDisabled },
});
