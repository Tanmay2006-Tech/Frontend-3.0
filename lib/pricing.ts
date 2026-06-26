export type Currency = 'USD' | 'INR' | 'EUR';
export type BillingPeriod = 'monthly' | 'annual';

export const exchangeRates: Record<Currency, number> = {
  USD: 1,
  INR: 83,
  EUR: 0.92,
};

export const currencySymbols: Record<Currency, string> = {
  USD: '$',
  INR: '₹',
  EUR: '€',
};

export const pricingTiers = [
  {
    id: 'starter',
    name: 'Starter',
    basePrice: 0,
    description: 'Perfect for getting started',
    features: [
      '1 agent instance',
      '100 executions/month',
      'Email support',
      'Basic analytics',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    basePrice: 99,
    description: 'For growing teams',
    featured: true,
    features: [
      '10 agent instances',
      '10,000 executions/month',
      'Priority support',
      'Advanced analytics',
      'Custom workflows',
      'API access',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    basePrice: 499,
    description: 'For large organizations',
    features: [
      'Unlimited agents',
      'Unlimited executions',
      'Dedicated support',
      'Enterprise analytics',
      'Custom integrations',
      'SLA guarantee',
      'On-premise option',
    ],
  },
];

export const calculatePrice = (
  basePrice: number,
  currency: Currency,
  period: BillingPeriod
): number => {
  const converted = basePrice * exchangeRates[currency];
  if (period === 'annual') {
    return Math.floor(converted * 12 * 0.8);
  }
  return Math.floor(converted);
};

export const formatPrice = (
  price: number,
  currency: Currency
): string => {
  if (price === 0) return 'Free';
  return `${currencySymbols[currency]}${price.toLocaleString()}`;
};
