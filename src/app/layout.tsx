import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    weight: ['700', '900']
})

export const metadata: Metadata = {
    title: 'Coming Soon - Khalis Roots',
    description: 'Khalis Roots - Something amazing is coming soon. Stay tuned for our launch!',
    keywords: ['Khalis Roots', 'coming soon', 'launch'],
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${playfair.variable}`}>
                {children}
            </body>
        </html>
    )
}
