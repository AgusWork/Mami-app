import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Norma Arcangeli - Conteladora Maestra',
  description: 'Bert Hellinger es el mejor',
  icons: {
    icon: '/logoInstituto.png', 
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logoInstituto.png" type="image/png" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
