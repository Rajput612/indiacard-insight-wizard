
import { useState } from 'react';
import { ArrowRight, X, Clock, ThumbsUp, Star, ShoppingCart, Zap } from 'lucide-react';
import { creditCards } from '@/data/creditCards';

// Map credit cards to promotions
const promotions = [
  {
    id: 1,
    card: creditCards.find(card => card.id === "1"), // Premium Rewards Gold
    title: "New Launch: Premium Rewards Gold",
    description: "Introducing the new Premium Rewards Gold card with enhanced travel benefits",
    type: "new",
    icon: <Star className="h-5 w-5 text-amber-500" />,
    bgColor: "bg-gradient-to-r from-amber-50 to-yellow-100",
    borderColor: "border-amber-200"
  },
  {
    id: 2,
    card: creditCards.find(card => card.id === "3"), // Everyday Rewards
    title: "High Approval Rate: Everyday Rewards",
    description: "Everyday Rewards has a 90% approval rate for new applicants",
    type: "approval",
    icon: <ThumbsUp className="h-5 w-5 text-green-500" />,
    bgColor: "bg-gradient-to-r from-green-50 to-emerald-100",
    borderColor: "border-green-200"
  },
  {
    id: 3,
    card: creditCards.find(card => card.id === "2"), // ShopMore Platinum
    title: "Limited Time Offer: ShopMore Platinum",
    description: "Zero joining fee for the next 30 days on ShopMore Platinum",
    type: "limited",
    icon: <Clock className="h-5 w-5 text-blue-500" />,
    bgColor: "bg-gradient-to-r from-blue-50 to-indigo-100",
    borderColor: "border-blue-200"
  },
];

const PromotionalBanner = () => {
  const [currentPromotion, setCurrentPromotion] = useState(0);
  const [dismissed, setDismissed] = useState<number[]>([]);
  
  const availablePromotions = promotions.filter(promo => !dismissed.includes(promo.id));
  
  if (availablePromotions.length === 0) {
    return null;
  }
  
  const promotion = availablePromotions[currentPromotion % availablePromotions.length];
  
  const handleDismiss = () => {
    setDismissed([...dismissed, promotion.id]);
    if (availablePromotions.length > 1) {
      setCurrentPromotion(currentPromotion + 1);
    }
  };
  
  const handleNext = () => {
    setCurrentPromotion(currentPromotion + 1);
  };

  const handleApply = () => {
    if (promotion.card && promotion.card.applyUrl) {
      window.open(promotion.card.applyUrl, "_blank");
    }
  };
  
  return (
    <div className={`w-full rounded-lg p-4 ${promotion.bgColor} border ${promotion.borderColor} relative overflow-hidden`}>
      <div className="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 bg-white/20 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 -ml-6 -mb-6 bg-white/20 rounded-full"></div>
      
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-3">
          <div className="bg-white p-2 rounded-full shadow-md">
            {promotion.icon}
          </div>
          <div>
            <h3 className="font-bold text-navy">{promotion.title}</h3>
            <p className="text-sm text-gray-700">{promotion.description}</p>
            <button 
              onClick={handleApply}
              className="mt-2 text-sm font-medium bg-navy text-white px-3 py-1 rounded-full hover:bg-navy/90 transition-colors flex items-center"
            >
              Apply Now <ArrowRight className="h-3 w-3 ml-1" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          {availablePromotions.length > 1 && (
            <button 
              onClick={handleNext}
              className="text-navy hover:text-blue-700 rounded-full p-1 transition-colors"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          )}
          
          <button 
            onClick={handleDismiss}
            className="text-gray-500 hover:text-gray-700 rounded-full p-1 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      {availablePromotions.length > 1 && (
        <div className="flex justify-center space-x-1 mt-2">
          {availablePromotions.map((_, index) => (
            <div 
              key={index} 
              className={`h-1.5 w-1.5 rounded-full ${
                index === currentPromotion % availablePromotions.length ? 'bg-navy' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PromotionalBanner;
