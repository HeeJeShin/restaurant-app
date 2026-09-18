import { getApp } from '@react-native-firebase/app';
import { getAuth } from '@react-native-firebase/auth';
import { getFirestore } from '@react-native-firebase/firestore';
import { getMessaging } from '@react-native-firebase/messaging';

// google-services.json / GoogleService-Info.plist가 네이티브 프로젝트에 있으면
// getApp()이 앱 시작 시 자동으로 초기화된 기본 앱을 반환한다 (별도 config 객체 불필요).
export const firebaseApp = getApp();
export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);
export const messaging = getMessaging(firebaseApp);

// TODO: Auth 로그인 방식(Google/Apple/카카오/네이버)은 각 SDK 연동 후
//       signInWithCredential(auth, credential) 형태로 붙일 예정.
// TODO: Firestore 보안 규칙은 웨이팅 데이터 모델이 정해지는 Stage 3에서 작성
//       (현재는 프로젝트 기본값인 전체 차단 상태).
