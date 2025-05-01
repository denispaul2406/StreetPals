import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PawPrint, Info, HeartHandshake, Siren, HandCoins } from 'lucide-react'; // Added HandCoins

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-8">
      {/* Hero Section */}
      <section className="w-full text-center py-10 md:py-16 bg-gradient-to-b from-secondary/50 to-background rounded-lg shadow-sm">
        <PawPrint className="h-12 w-12 md:h-16 md:w-16 text-primary mx-auto mb-3" />
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Welcome to StreetPals
        </h1>
        <p className="mt-3 text-base leading-7 text-muted-foreground max-w-xl mx-auto px-4 md:text-lg">
          Connecting compassionate people with stray animals in need. Report, rescue, adopt, or donate to make a difference.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6 px-4">
          <Button asChild size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground shadow-md">
            <Link href="/report">Report a Stray Animal</Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
            <Link href="/adopt">Find a Pal to Adopt</Link>
          </Button>
        </div>
      </section>

      {/* Features Overview */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full">
        <Card className="hover:shadow-md transition-shadow duration-300">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Siren className="text-primary h-5 w-5" /> Report Strays
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">See an animal in need? Quickly report its location and condition.</p>
            <Button variant="link" className="p-0 text-accent h-auto text-sm" asChild>
              <Link href="/report">Report Now →</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow duration-300">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <HeartHandshake className="text-primary h-5 w-5" /> Adopt & Foster
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">Open your heart and home. Browse animals looking for love.</p>
             <Button variant="link" className="p-0 text-accent h-auto text-sm" asChild>
              <Link href="/adopt">Browse Animals →</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow duration-300">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <HandCoins className="text-primary h-5 w-5" /> Donate & Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">Your contribution saves lives. Support our rescue efforts.</p>
             <Button variant="link" className="p-0 text-accent h-auto text-sm" asChild>
              <Link href="/donate">Donate Today →</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow duration-300">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Info className="text-primary h-5 w-5" /> Learn & Help
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">Get tips on animal care and find local awareness events.</p>
             <Button variant="link" className="p-0 text-accent h-auto text-sm" asChild>
              <Link href="/learn">Learn More →</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Placeholder Image Section */}
      <section className="w-full aspect-[3/1] max-h-[300px]">
         <Image
            src="https://picsum.photos/seed/rescue/1200/400"
            alt="Happy rescued animals"
            width={1200}
            height={400}
            className="rounded-lg object-cover w-full h-full shadow-md"
            data-ai-hint="dog cat rescue happy group"
          />
      </section>
    </div>
  );
}
