import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Use Inter font as requested
import './globals.css';
import { cn } from '@/lib/utils';
// import Header from '@/components/layout/header'; // Removed Header
import BottomNavbar from '@/components/layout/bottom-navbar'; // Added BottomNavbar
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans', // Keep variable name for potential compatibility if Geist was used elsewhere, but font is Inter
});

export const metadata: Metadata = {
  title: 'StreetPals',
  description: 'Helping stray animals together.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable // Apply Inter font variable
        )}
      >
        {/* Add pb-16 to account for the fixed bottom navbar height */}
        <div className="relative flex min-h-screen flex-col pb-16">
          {/* <Header /> */} {/* Header removed */}
          {/* Adjust padding for mobile view */}
          <main className="flex-1 container mx-auto px-4 py-6 sm:px-6 sm:py-8">
            {children}
          </main>
          <BottomNavbar /> {/* Added Bottom Navbar */}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
