import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import Sidebar from '@/components/Sidebar';
import SocialSidebar from '@/components/SocialSidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lucas Colombo | Frontend Developer',
  description: 'Portfolio de Lucas Colombo - Desenvolvedor Frontend e UX/UI Designer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <div className="min-h-screen bg-background text-foreground flex flex-col">
              <Sidebar />
              <SocialSidebar />
              <main className="flex-1 md:pl-[200px] md:pr-[70px]">
                {children}
              </main>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}