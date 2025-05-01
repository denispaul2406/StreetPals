import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Use Inter font as requested
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/header';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans', // Keep variable name for potential compatibility if Geist was used elsewhere, but font is Inter
});

// Remove Geist Mono as it's not specified
// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

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
          // geistMono.variable // Remove Mono font variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 container mx-auto px-4 py-8">
            {children}
          </main>
          {/* Add a simple footer later if needed */}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
