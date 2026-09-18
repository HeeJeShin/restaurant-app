import { create } from 'zustand';

type ReservationDraft = {
  restaurantId: string | null;
  date: string | null;
  partySize: number;
};

type ReservationState = {
  draft: ReservationDraft;
  setRestaurant: (restaurantId: string) => void;
  setDate: (date: string) => void;
  setPartySize: (partySize: number) => void;
  reset: () => void;
};

const initialDraft: ReservationDraft = {
  restaurantId: null,
  date: null,
  partySize: 2,
};

export const useReservationStore = create<ReservationState>(set => ({
  draft: initialDraft,
  setRestaurant: restaurantId => set(state => ({ draft: { ...state.draft, restaurantId } })),
  setDate: date => set(state => ({ draft: { ...state.draft, date } })),
  setPartySize: partySize => set(state => ({ draft: { ...state.draft, partySize } })),
  reset: () => set({ draft: initialDraft }),
}));
