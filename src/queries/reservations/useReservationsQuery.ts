import { useQuery } from '@tanstack/react-query';
import { reservationKeys } from '../keys';

export type Reservation = {
  id: string;
  restaurantName: string;
  date: string;
  partySize: number;
};

const MOCK_RESERVATIONS: Reservation[] = [
  { id: 'mock-reservation-1', restaurantName: '스시야', date: '2026-09-20 19:00', partySize: 2 },
];

async function fetchReservations(): Promise<Reservation[]> {
  return MOCK_RESERVATIONS;
}

export function useReservationsQuery() {
  return useQuery({
    queryKey: reservationKeys.list(),
    queryFn: fetchReservations,
  });
}
