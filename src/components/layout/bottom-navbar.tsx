'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Siren, HeartHandshake, HandCoins, Info, Home } from 'lucide-react'; // Added HandCoins, Home
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/report', label: 'Report', icon: Siren },
  { href: '/adopt', label: 'Adopt', icon: HeartHandshake },
  { href: '/donate', label: 'Donate', icon: HandCoins }, // Changed icon
  { href: '/learn', label: 'Learn', icon: Info },
];

export default function BottomNavbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 h-16 border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-full items-center justify-around px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center justify-center text-xs font-medium transition-colors h-full px-2 flex-1',
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <item.icon className={cn("h-5 w-5 mb-1", isActive ? 'text-primary' : '')} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
