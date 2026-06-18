import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Yaris Nadaf - Full Stack & AI Developer',
  description: 'Portfolio of Yaris A. Nadaf - Full Stack Developer, AI/ML Enthusiast, IoT Developer',
  openGraph: {
    title: 'Yaris Nadaf - Full Stack & AI Developer',
    description: 'Portfolio of Yaris A. Nadaf - Full Stack Developer, AI/ML Enthusiast, IoT Developer',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-dark-bg text-text-primary font-inter antialiased">
        {children}
      </body>
    </html>
  );
}