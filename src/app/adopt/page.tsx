'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { HeartHandshake, CalendarDays, Info, Bone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';

// Sample data for animals, tips, and events
const sampleAnimals = [
  { id: 1, name: 'Buddy', type: 'Dog', age: '2 years', breed: 'Labrador Mix', description: 'Friendly and energetic, loves fetch!', image: 'https://picsum.photos/seed/buddy/300/200', dataAiHint: 'labrador dog happy' },
  { id: 2, name: 'Luna', type: 'Cat', age: '1 year', breed: 'Domestic Shorthair', description: 'Calm and affectionate, enjoys naps in sunny spots.', image: 'https://picsum.photos/seed/luna/300/200', dataAiHint: 'tabby cat calm' },
  { id: 3, name: 'Rocky', type: 'Dog', age: '5 years', breed: 'German Shepherd', description: 'Loyal and protective, needs an experienced owner.', image: 'https://picsum.photos/seed/rocky/300/200', dataAiHint: 'german shepherd dog alert' },
  { id: 4, name: 'Mittens', type: 'Cat', age: '6 months', breed: 'Siamese Mix', description: 'Playful and curious kitten looking for adventure.', image: 'https://picsum.photos/seed/mittens/300/200', dataAiHint: 'siamese kitten playful' },
];

const careTips = [
    "Provide fresh water daily.",
    "Feed high-quality food appropriate for age and size.",
    "Ensure regular exercise and playtime.",
    "Keep vaccinations up-to-date.",
    "Socialize your pet with people and other animals.",
    "Provide a safe and comfortable resting place.",
    "Regular grooming helps maintain coat health.",
    "Monitor for signs of illness or injury.",
    "Use positive reinforcement for training.",
    "Never leave pets unattended in vehicles.",
];

const mockEvents = [
  { id: 1, title: 'Adoption Drive - City Park', date: 'Next Saturday', description: 'Meet adoptable dogs and cats!' },
  { id: 2, title: 'Free Vaccination Camp', date: 'Oct 15th', description: 'Basic vaccinations for stray animals.' },
  { id: 3, title: 'Volunteer Orientation', date: 'First Monday of Month', description: 'Learn how you can help StreetPals.' },
];

export default function AdoptPage() {
  const { toast } = useToast();

  const handleFosterClick = (animalName: string) => {
    // Simulate interaction
    toast({
      title: 'Foster Interest Registered!',
      description: `Thank you for your interest in fostering ${animalName}. A volunteer will contact you (simulation).`,
    });
  };

  return (
    <div className="space-y-12">
      {/* Browse Animals Section */}
      <section>
        <h2 className="text-3xl font-semibold tracking-tight mb-6 flex items-center gap-2">
          <HeartHandshake className="text-primary" /> Find Your New Best Friend
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sampleAnimals.map((animal) => (
            <Card key={animal.id} className="flex flex-col overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <Image
                  src={animal.image}
                  alt={`Photo of ${animal.name}`}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={animal.dataAiHint}
                />
              </div>
              <CardHeader>
                <CardTitle>{animal.name}</CardTitle>
                <CardDescription>{animal.type} - {animal.breed} - {animal.age}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{animal.description}</p>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={() => handleFosterClick(animal.name)}
                >
                  <HeartHandshake className="mr-2 h-4 w-4" /> Foster Me (Simulated)
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Tips and Events Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Care Tips */}
        <div>
          <h3 className="text-2xl font-semibold tracking-tight mb-4 flex items-center gap-2">
            <Bone className="text-primary" /> Animal Care Tips
          </h3>
           <Card className="shadow-sm">
             <CardContent className="p-0">
                <ScrollArea className="h-72 p-4">
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                   {careTips.map((tip, index) => (
                      <li key={index}>{tip}</li>
                   ))}
                 </ul>
                </ScrollArea>
             </CardContent>
           </Card>
        </div>

        {/* Mock Events */}
        <div>
          <h3 className="text-2xl font-semibold tracking-tight mb-4 flex items-center gap-2">
            <CalendarDays className="text-primary" /> Upcoming Events (Mock)
          </h3>
          <div className="space-y-4">
            {mockEvents.map((event) => (
              <Card key={event.id} className="shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </CardContent>
                 <CardFooter>
                    <Button variant="outline" size="sm" disabled>Learn More (Simulated)</Button>
                 </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
