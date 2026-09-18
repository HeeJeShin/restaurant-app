import type { NavigatorScreenParams } from '@react-navigation/native';

export type HomeStackParamList = {
  Home: undefined;
};

export type ReservationStackParamList = {
  RestaurantList: undefined;
  RestaurantDetail: { restaurantId: string };
  ReservationForm: { restaurantId: string };
  ReservationConfirm: { reservationId: string };
  MyReservations: undefined;
};

export type WaitingStackParamList = {
  WaitingList: undefined;
  WaitingDetail: { waitingId: string };
};

export type MyPageStackParamList = {
  MyPage: undefined;
  Login: undefined;
  ProfileEdit: undefined;
};

export type MainTabParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
  ReservationTab: NavigatorScreenParams<ReservationStackParamList>;
  WaitingTab: NavigatorScreenParams<WaitingStackParamList>;
  MyPageTab: NavigatorScreenParams<MyPageStackParamList>;
};

export type RootStackParamList = {
  Main: NavigatorScreenParams<MainTabParamList>;
};
