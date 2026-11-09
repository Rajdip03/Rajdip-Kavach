import './globals.css';
import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Kavach | Stay One Step Ahead of Online Scams',
  description: 'Analyze suspicious links, messages, and websites before they put your digital safety at risk.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#FAFAFA] text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}