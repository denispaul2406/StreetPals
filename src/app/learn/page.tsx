import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Info, Bone, CalendarDays } from 'lucide-react';

// Re-use data structures from adopt/page.tsx or define inline
const careTips = [
    "Approach stray animals cautiously and calmly.",
    "Offer water, especially in hot weather.",
    "If safe, offer small amounts of food.",
    "Check for identification tags or collars.",
    "Report injured or sick animals immediately.",
    "Do not try to handle aggressive animals yourself.",
    "Learn basic animal first aid.",
    "Understand the importance of spaying/neutering.",
    "Be aware of local animal welfare laws.",
    "Support local shelters and rescue groups.",
    "Educate others about responsible pet ownership.",
    "Consider microchipping your own pets."
];

const mockEvents = [
  { id: 1, title: 'Community Awareness Talk: Stray Animal Welfare', date: 'Next Wednesday Evening', description: 'Learn about local challenges and solutions.' },
  { id: 2, title: 'Fundraising Bake Sale for StreetPals', date: 'Oct 22nd', description: 'Support our cause with delicious treats!' },
  { id: 3, title: 'Workshop: Basic First Aid for Animals', date: 'Nov 5th', description: 'Hands-on training session (limited spots).' },
];


export default function LearnPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-10 bg-secondary/30 rounded-lg">
        <Info className="h-12 w-12 text-primary mx-auto mb-3" />
        <h2 className="text-3xl font-semibold tracking-tight mb-2">
          Learn & Get Involved
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Knowledge is power. Discover how you can help stray animals and contribute to a more compassionate community.
        </p>
      </section>

       {/* Tips and Events Section */}
       <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Care Tips */}
        <div>
          <h3 className="text-2xl font-semibold tracking-tight mb-4 flex items-center gap-2">
            <Bone className="text-primary" /> Tips for Helping Strays
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
            <CalendarDays className="text-primary" /> Community Events (Mock)
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
                    <Button variant="outline" size="sm" disabled>Register Interest (Simulated)</Button>
                 </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

        {/* Additional Info Section */}
        <section>
            <h3 className="text-2xl font-semibold tracking-tight mb-4">Why Help?</h3>
             <Card className="shadow-sm">
               <CardContent className="p-6 space-y-4 text-muted-foreground">
                <p>Stray animals face numerous challenges daily, including hunger, disease, injury, and cruelty. They are often victims of circumstance, abandoned or born on the streets.</p>
                <p>By taking small actions - reporting, donating, fostering, or simply spreading awareness - you contribute to a network of care that can significantly improve their lives and reduce suffering.</p>
                <p>Every act of kindness matters. Together, we can create a safer and more humane environment for all living beings in our community.</p>
               </CardContent>
             </Card>
        </section>
    </div>
  );
}
