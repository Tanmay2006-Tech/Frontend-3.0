'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface PricingPlan {
  name: string;
  price: number;
  features: { text: string; included: boolean }[];
  highlighted?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    price: 0,
    features: [
      { text: '5 Custom Agents', included: true },
      { text: '1,000 Tasks/mo', included: true },
      { text: 'Priority Support', included: false },
    ],
  },
  {
    name: 'Professional',
    price: 99,
    features: [
      { text: 'Unlimited Agents', included: true },
      { text: '50,000 Tasks/mo', included: true },
      { text: 'Priority Support', included: true },
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 499,
    features: [
      { text: 'Unlimited Everything', included: true },
      { text: 'Custom Integrations', included: true },
      { text: '24/7 Dedicated Support', included: true },
    ],
  },
];

const currencies = {
  USD: { symbol: '$', multiplier: 1 },
  EUR: { symbol: '€', multiplier: 0.92 },
  INR: { symbol: '₹', multiplier: 83.5 },
};

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'INR'>('USD');

  const getPrice = (basePrice: number) => {
    const annual = isAnnual ? basePrice * 12 * 0.8 : basePrice;
    return Math.round(annual * currencies[currency].multiplier);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-light-bg text-light-text py-16 md:py-24 px-6 md:px-12" id="pricing">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-label-mono text-light-text/50 mb-4">INVESTMENT</p>
        <h2 className="text-display-lg md:text-5xl font-bold mb-12">Scalable Architecture Pricing</h2>

        <motion.div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 bg-white/50 p-6 rounded border border-light-border inline-flex" whileInView={{ scale: [0.95, 1] }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <div className="flex items-center gap-4">
            <span className="text-label-mono">MONTHLY</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input className="sr-only peer" type="checkbox" checked={isAnnual} onChange={(e) => setIsAnnual(e.target.checked)} />
              <div className="w-11 h-6 bg-light-border rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-light-text"></div>
            </label>
            <span className="text-label-mono">ANNUAL (-20%)</span>
          </div>
          <div className="w-px h-8 bg-light-border hidden md:block"></div>
          <select
            className="bg-transparent border-none text-label-mono focus:ring-0 cursor-pointer text-light-text"
            value={currency}
            onChange={(e) => setCurrency(e.target.value as 'USD' | 'EUR' | 'INR')}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="INR">INR</option>
          </select>
        </motion.div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            className={`p-8 md:p-12 border flex flex-col transition-all duration-300 ${
              plan.highlighted
                ? 'bg-light-text text-light-bg border-light-text transform md:scale-105 shadow-lg'
                : 'bg-white border-light-border hover:border-light-text'
            }`}
            variants={itemVariants}
            whileHover={{ y: -4 }}
          >
            <div className={`text-label-mono text-xs mb-4 uppercase ${plan.highlighted ? 'text-light-bg' : 'text-light-text/50'}`}>
              {plan.name}
            </div>
            <div className="mb-8">
              <span className="text-4xl md:text-5xl font-bold">
                {currencies[currency].symbol}
                {getPrice(plan.price)}
              </span>
              <span className={`text-label-mono text-xs ${plan.highlighted ? 'text-light-bg' : 'text-light-text/50'}`}>/month</span>
            </div>

            <ul className="flex flex-col gap-4 mb-12 flex-grow">
              {plan.features.map((feature) => (
                <li
                  key={feature.text}
                  className={`flex items-center gap-3 text-sm ${feature.included ? '' : plan.highlighted ? 'text-light-bg/50' : 'text-light-text/50'}`}
                >
                  <span className="material-symbols-outlined text-sm">{feature.included ? 'check' : 'close'}</span>
                  {feature.text}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-4 text-label-mono text-xs font-bold transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-white text-light-text hover:bg-light-bg hover:border-white border border-transparent'
                  : 'border border-light-text text-light-text hover:bg-light-text hover:text-white'
              }`}
            >
              {plan.highlighted ? 'UPGRADE NOW' : 'GET STARTED'}
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
