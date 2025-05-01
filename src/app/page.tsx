import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PawPrint, Info, HeartHandshake, Siren } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-12">
      {/* Hero Section */}
      <section className="w-full text-center py-16 bg-gradient-to-b from-secondary/50 to-background rounded-lg shadow-sm">
        <PawPrint className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Welcome to StreetPals
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          Connecting compassionate people with stray animals in need. Report, rescue, adopt, or donate to make a difference.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md">
            <Link href="/report">Report a Stray Animal</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/adopt">Find a Pal to Adopt</Link>
          </Button>
        </div>
      </section>

      {/* Features Overview */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Siren className="text-primary" /> Report Strays
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">See an animal in need? Quickly report its location and condition.</p>
            <Button variant="link" className="p-0 text-accent" asChild>
              <Link href="/report">Report Now →</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HeartHandshake className="text-primary" /> Adopt & Foster
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Open your heart and home. Browse animals looking for love.</p>
             <Button variant="link" className="p-0 text-accent" asChild>
              <Link href="/adopt">Browse Animals →</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-piggy-bank text-primary"><path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 1.3 3.2 3 3.8 1 1.6 2.6 2.2 4.6 2.2H16c1.7 0 3-1.3 3-3 0-1.1-.6-2-1.5-2.5.7-.7 1-1.6 1-2.5 0-1.7-1.3-3-3-3z"/><path d="M3 9v6"/><path d="M21 9c-1.1 0-2 .9-2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9h-2z"/></svg>
              Donate & Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Your contribution saves lives. Support our rescue efforts.</p>
             <Button variant="link" className="p-0 text-accent" asChild>
              <Link href="/donate">Donate Today →</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="text-primary" /> Learn & Help
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Get tips on animal care and find local awareness events.</p>
             <Button variant="link" className="p-0 text-accent" asChild>
              <Link href="/learn">Learn More →</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Placeholder Image Section */}
      <section className="w-full">
         <Image
            src="https://picsum.photos/1200/400"
            alt="Happy rescued animals"
            width={1200}
            height={400}
            className="rounded-lg object-cover w-full shadow-md"
            data-ai-hint="dog cat rescue happy"
          />
      </section>
    </div>
  );
}
