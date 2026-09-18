export const restaurantKeys = {
  all: ['restaurants'] as const,
  list: () => [...restaurantKeys.all, 'list'] as const,
};

export const reservationKeys = {
  all: ['reservations'] as const,
  list: () => [...reservationKeys.all, 'list'] as const,
};
