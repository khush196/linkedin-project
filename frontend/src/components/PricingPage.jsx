import React from 'react';
import '../styles/PricingPage.css';

function PricingPage() {
  const pricingPlans = [
    { name: 'Basic', price: 0, features: ['Limited features', '10 message limit'] },
    { name: 'Standard', price: 9.99, features: ['All features', 'Unlimited messages'] },
    { name: 'Premium', price: 29.99, features: ['All features', 'Unlimited messages', 'Priority support'] },
  ];

  return (
    <div className="pricing-page">
      <h1>Pricing</h1>
      <div className="plan-grid">
        {pricingPlans.map((plan) => (
          <div className="plan" key={plan.name}>
            <h3>{plan.name}</h3>
            <p>${plan.price}/month</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <button>Subscribe</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingPage;