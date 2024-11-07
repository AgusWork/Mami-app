import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Norma Arcangeli - Conteladora Maestra',
  description: 'Bert Hellinger es el mejor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[#f4ede4] text-[#333333]`}>{children}</body>
    </html>
  )
}