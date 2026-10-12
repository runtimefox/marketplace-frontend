import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Marketplace',
  description:
    'Marketplace is a platform for buying and selling products online. It provides a convenient and secure way for users to connect with sellers and make purchases. With a wide range of products available, Marketplace offers a seamless shopping experience for customers.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Providers>
          {children}
          <Toaster position="bottom-right" reverseOrder={false} />
        </Providers>
      </body>
    </html>
  );
}
