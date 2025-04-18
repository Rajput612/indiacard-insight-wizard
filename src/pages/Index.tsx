
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SpendingFormContainer from "@/components/SpendingForm/SpendingFormContainer";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Tag } from "lucide-react";
import CreditCardBanner from "@/components/CreditCardBanner";
import { creditCards } from "@/data/creditCards";

// Sponsored cards we want to promote
const sponsoredCards = [
  {
    cardId: "1", // Premium Rewards Gold
    tagline: "Best for Travel & Dining",
    highlights: ["5% cashback on all online purchases", "Complimentary airport lounge access"]
  },
  {
    cardId: "5", // Digital First
    tagline: "Best for Online Shopping",
    highlights: ["5% cashback on digital transactions", "10% discount on partner e-commerce platforms"]
  },
  {
    cardId: "2", // ShopMore Platinum
    tagline: "Best for Fashion & Entertainment",
    highlights: ["3% cashback on all shopping", "Buy 1 Get 1 movie tickets every weekend"]
  }
];

const Index = () => {
  const navigate = useNavigate();
  const [showAllPromoted, setShowAllPromoted] = useState(false);
  
  // Get the actual card objects from our credit card data
  const promotedCards = sponsoredCards.map(promo => ({
    ...promo,
    card: creditCards.find(card => card.id === promo.cardId)
  })).filter(item => item.card); // Filter out any that don't have matching cards
  
  const displayedCards = showAllPromoted ? promotedCards : promotedCards.slice(0, 2);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      
      <main className="flex-grow">
        <section id="spend-form" className="py-12 px-4">
          <SpendingFormContainer />
        </section>
        
        {/* Featured Cards Section */}
        <section className="py-12 px-4 bg-navy/5">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-navy mb-3">Featured Cards</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our top picks to meet your financial goals and lifestyle needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedCards.map((promo, index) => (
                <Card key={index} className="h-full flex flex-col hover:shadow-lg transition-shadow border-t-4" 
                  style={{ borderTopColor: index === 0 ? "#8B5CF6" : index === 1 ? "#F97316" : "#10B981" }}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-navy">{promo.card?.name}</CardTitle>
                      <div className="bg-navy/10 text-navy px-2 py-1 rounded-full text-xs font-medium flex items-center">
                        <Tag className="h-3 w-3 mr-1" />
                        Sponsored
                      </div>
                    </div>
                    <p className="text-sm font-medium text-indigo-600">{promo.tagline}</p>
                  </CardHeader>
                  
                  <CardContent className="flex-grow py-3">
                    <div className="mb-6">
                      <CreditCardBanner card={promo.card!} size="sm" />
                    </div>
                    
                    <div>
                      <p className="text-gray-500 text-sm mb-1">Highlights</p>
                      <ul className="space-y-1">
                        {promo.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-0">
                    <Button className="w-full bg-navy hover:bg-navy/90" asChild>
                      <a href={promo.card?.applyUrl} target="_blank" rel="noopener noreferrer">
                        Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              {!showAllPromoted && promotedCards.length > 2 && (
                <Button 
                  variant="outline" 
                  className="border-navy text-navy hover:bg-navy/10"
                  onClick={() => setShowAllPromoted(true)}
                >
                  Show More Cards
                </Button>
              )}
              <Button 
                variant="ghost" 
                className="ml-2 text-navy hover:bg-navy/10"
                onClick={() => navigate('/cards')}
              >
                View All Cards <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        <section className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-navy mb-3">Why Use IndiaCardInsight?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We help you make informed financial decisions by finding the credit cards that match your lifestyle.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-navy/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">Personalized Recommendations</h3>
                <p className="text-gray-600">
                  Get credit card suggestions tailored to your unique spending habits and financial needs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-navy/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">Maximize Rewards</h3>
                <p className="text-gray-600">
                  Find cards that offer the highest rewards and cashback for your most frequent spending categories.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-navy/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">Secure & Private</h3>
                <p className="text-gray-600">
                  Your data is never stored or shared. We use it only to generate instant recommendations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
