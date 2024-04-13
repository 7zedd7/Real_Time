import StreamVideoProvider from '@/providers/SteamCliendProvider'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
    title: "RealTime",
    description: "Real Time Video Conference App",
    icons: {
        icon: '/icons/logo.svg'
    }
};


function RootLayout({ children }: { children: ReactNode }) {
    return (
        <main>
            <StreamVideoProvider>
                {children}
            </StreamVideoProvider>
        </main>
    )
}

export default RootLayout