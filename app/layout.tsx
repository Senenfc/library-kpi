import RequestIcon from '@/components/icons/RequestIcon';
import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import React from 'react';
import SearchBar from '@/components/SearchBar';
import Tabs from '@/components/Tabs';

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: 'Library',
  description: 'Manage your resources (KPI, Layouts, Storyboards)',
};

export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className='mx-auto p-4'>
          <h1 className='text-center text-3xl font-bold mb-6'>Library</h1>
          <p className='text-center text-sm mb-8'>Browse for assets needed to report and present analysis</p>
          <SearchBar />
          <Tabs />
          <div className='mt-6'>{children}</div>
          <button className='absolute right-3 top-3 p-1 bg-[#64738b] hover:bg-[#525f73] text-white text-sm rounded'>
            <div className='flex w-full items-center justify-center p-1'>
              <RequestIcon />
              <span className='ml-1 text-xs font-medium'>Request</span>
            </div>
          </button>
        </div>
      </body>
    </html >
  );
}
