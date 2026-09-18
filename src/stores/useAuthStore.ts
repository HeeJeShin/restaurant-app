import { create } from 'zustand';

type AuthUser = {
  id: string;
  name: string;
};

type AuthState = {
  user: AuthUser | null;
  isLoggedIn: boolean;
  login: (user: AuthUser) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>(set => ({
  user: null,
  isLoggedIn: false,
  login: user => set({ user, isLoggedIn: true }),
  logout: () => set({ user: null, isLoggedIn: false }),
}));
