'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Utensils, Pill } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';

const donationAmounts = [10, 50, 100];
const usageExamples = {
  10: 'Provides a meal for a hungry stray.',
  50: 'Helps cover basic medical supplies for one animal.',
  100: 'Contributes towards shelter and care costs.',
};

type UsageKeys = keyof typeof usageExamples;

export default function DonatePage() {
  const { toast } = useToast();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleDonateClick = async (amount: number) => {
    setSelectedAmount(amount);
    setIsProcessing(true);
    setShowSuccess(false);

    // Simulate payment processing
    console.log(`Processing donation of Rs.${amount}`);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsProcessing(false);
    setShowSuccess(true);
    toast({
      title: 'Donation Successful!',
      description: `Thank you for donating Rs.${amount}. Your contribution makes a difference!`,
    });

     // Reset after a delay
    setTimeout(() => {
        setShowSuccess(false);
        setSelectedAmount(null);
    }, 4000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card className="overflow-hidden shadow-lg">
         <div className="relative h-64 w-full">
            <Image
              src="https://picsum.photos/seed/donate/800/400"
              alt="Grateful animals"
              layout="fill"
              objectFit="cover"
              data-ai-hint="grateful dog cat shelter hands"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                 <h2 className="text-4xl font-bold text-white text-center px-4">Support StreetPals</h2>
            </div>
          </div>
        <CardHeader className="text-center pt-6">
          <CardTitle className="text-3xl flex items-center justify-center gap-2">
              <Heart className="text-primary w-8 h-8" /> Make a Difference Today
          </CardTitle>
          <CardDescription className="text-lg">
            Your generosity helps us provide food, medical care, and shelter to animals in need.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-6 pb-8">
          {showSuccess && selectedAmount ? (
            <div className="text-center p-6 bg-green-100 text-green-800 rounded-lg w-full max-w-md">
              <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
              <p className="text-lg">Your donation of <span className="font-bold">Rs.{selectedAmount}</span> was successful.</p>
              <p className="mt-3 text-base">{usageExamples[selectedAmount as UsageKeys]}</p>
              <div className="mt-4 flex justify-center text-primary">
                 {selectedAmount === 10 && <Utensils className="w-6 h-6"/>}
                 {selectedAmount === 50 && <Pill className="w-6 h-6"/>}
                 {selectedAmount === 100 && <Heart className="w-6 h-6 fill-primary"/>}
              </div>
            </div>
          ) : (
            <>
              <p className="text-muted-foreground">Choose a donation amount:</p>
              <div className="flex flex-wrap justify-center gap-4">
                {donationAmounts.map((amount) => (
                  <Button
                    key={amount}
                    size="lg"
                    variant={selectedAmount === amount ? 'default' : 'outline'}
                    className={`w-32 h-16 text-xl font-semibold transition-all duration-200 ${
                      selectedAmount === amount ? 'ring-2 ring-primary ring-offset-2' : ''
                    }`}
                    onClick={() => handleDonateClick(amount)}
                    disabled={isProcessing}
                  >
                    {isProcessing && selectedAmount === amount ? (
                       <svg className="animate-spin h-5 w-5 text-current" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    ) : (
                      `Rs.${amount}`
                    )}
                  </Button>
                ))}
              </div>
              {selectedAmount && !isProcessing && (
                 <p className="text-sm text-muted-foreground mt-4">{usageExamples[selectedAmount as UsageKeys]}</p>
              )}
               <Button
                className="mt-6 w-full max-w-xs bg-accent hover:bg-accent/90 text-accent-foreground"
                disabled={!selectedAmount || isProcessing}
                onClick={() => selectedAmount && handleDonateClick(selectedAmount)}
              >
                 {isProcessing ? 'Processing...' : `Confirm Donation of Rs.${selectedAmount || '...'}`}
              </Button>
            </>
          )}
        </CardContent>
      </Card>

      {/* Why Donate Section */}
       <section className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Where Your Donation Goes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-muted-foreground">
              <div className="flex flex-col items-center p-4 bg-secondary/50 rounded-lg">
                  <Utensils className="w-8 h-8 text-primary mb-2"/>
                  <h4 className="font-semibold mb-1">Food & Nutrition</h4>
                  <p className="text-sm">Providing daily meals to keep strays healthy and strong.</p>
              </div>
               <div className="flex flex-col items-center p-4 bg-secondary/50 rounded-lg">
                  <Pill className="w-8 h-8 text-primary mb-2"/>
                  <h4 className="font-semibold mb-1">Medical Care</h4>
                  <p className="text-sm">Vaccinations, treatments, and emergency vet visits.</p>
              </div>
               <div className="flex flex-col items-center p-4 bg-secondary/50 rounded-lg">
                  <Heart className="w-8 h-8 text-primary mb-2 fill-primary"/>
                  <h4 className="font-semibold mb-1">Rescue & Shelter</h4>
                  <p className="text-sm">Supporting rescue operations and providing safe temporary shelter.</p>
              </div>
          </div>
       </section>
    </div>
  );
}
