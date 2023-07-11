import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/Navbar/page'
import { Metadata } from 'next'
import { siteConfig } from '@/config/siteInfo'
import { Footer } from '@/components/Footer/page'

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
	icon: "/favicon.ico"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-white font-sans`}>
			<Navbar/>
          		{children}
		  	<Footer/>
      </body>
    </html>
  )
}
