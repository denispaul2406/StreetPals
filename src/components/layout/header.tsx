import Link from 'next/link';
import { PawPrint } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <PawPrint className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block">StreetPals</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-4 sm:justify-end">
          <Button variant="ghost" asChild>
            <Link href="/report">Report Stray</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/adopt">Adopt/Foster</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/donate">Donate</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/learn">Learn More</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
