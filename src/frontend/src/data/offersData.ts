// Shared offers data for OffersPage and GlobalSearch

export interface Offer {
  title: string;
  description: string;
  badge: string;
}

export const OFFERS: Offer[] = [
  {
    title: 'Flat 15% Pre-book offer',
    description: 'Book your table in advance and enjoy a flat 15% discount on your total bill. Perfect for planning special occasions and family gatherings with thoughtful savings.',
    badge: 'Popular',
  },
  {
    title: 'Instant 10% off on bill payments',
    description: 'Get an instant 10% discount when you pay your bill. Valid on all payment methods including cash, card, and digital wallets for your convenience.',
    badge: 'Limited Time',
  },
  {
    title: 'Bank & RuPay offers',
    description: 'Exclusive discounts and cashback offers available on select bank cards and RuPay transactions. Check with our staff for current promotions and special deals.',
    badge: 'Exclusive',
  },
];
