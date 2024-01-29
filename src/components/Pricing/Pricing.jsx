import PricingCard from './PricingCard';
import { pricingData } from '../../data/pricing.js';

const Pricing = () => {
  return (
    <section className="bg-hunterGreen py-12 flex justify-evenly items-center flex-col gap-y-8">
      <h2 className="font-bold uppercase text-oldLace">
        Conheça nossos Planos
      </h2>
      <div className="w-full p-4 flex flex-col lg:flex-row items-center justify-center gap-y-4 lg:gap-x-8">
        {pricingData.map((card) => {
          return (
            <PricingCard
              title={card.title}
              value={card.value}
              description={card.description}
              key={card.title}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
