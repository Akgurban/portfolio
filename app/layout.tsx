import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { PersonJsonLd } from "@/components/JsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akgurban - Software Engineer Portfolio",
  description: "Personal portfolio showcasing frontend development projects and skills in React, Next.js, TypeScript, and modern web technologies",
  metadataBase: new URL('https://akgurban.vercel.app'),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' }
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Akgurban - Software Engineer Portfolio",
    description: "Personal portfolio showcasing frontend development projects and skills in React, Next.js, TypeScript, and modern web technologies",
    type: 'website',
    locale: 'en_US',
    url: 'https://akgurban.vercel.app',
    siteName: 'Akgurban Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Akgurban - Software Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Akgurban - Software Engineer Portfolio",
    description: "Personal portfolio showcasing frontend development projects and skills in React, Next.js, TypeScript, and modern web technologies",
    creator: '@akgurban',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  keywords: [
    'Software Engineer',
    'Frontend Developer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Web Development',
    'Portfolio',
    'Full Stack Developer',
    'UI/UX',
    'Node.js',
    'Tailwind CSS',
    'GSAP',
  ],
  authors: [{ name: 'Akgurban Jumayev' }],
  other: {
    'theme-color': '#8B5CF6',
    'msapplication-TileColor': '#8B5CF6',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <PersonJsonLd
          name="Akgurban"
          jobTitle="Software Engineer"
          description="Passionate software engineer specializing in frontend development, React, Next.js, and modern web technologies"
          url="https://akgurban.vercel.app"
          sameAs={[
            "https://github.com/akgurban",
            "https://linkedin.com/in/akgurban",
            "https://twitter.com/akgurban"
          ]}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full dark`}
      >
        <Navigation />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}