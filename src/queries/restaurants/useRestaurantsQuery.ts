import { useQuery } from '@tanstack/react-query';
import { restaurantKeys } from '../keys';

export type Restaurant = {
  id: string;
  name: string;
  category: string;
};

const MOCK_RESTAURANTS: Restaurant[] = [
  { id: '1', name: '스시야', category: '일식' },
  { id: '2', name: '한우마을', category: '한식' },
  { id: '3', name: '파스타공방', category: '양식' },
];

async function fetchRestaurants(): Promise<Restaurant[]> {
  return MOCK_RESTAURANTS;
}

export function useRestaurantsQuery() {
  return useQuery({
    queryKey: restaurantKeys.list(),
    queryFn: fetchRestaurants,
  });
}
