import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const popins = Poppins({
weight : ["100", "300", "400", "500", "800"],
subsets : ["latin"]
})

export const metadata: Metadata = {
  title: 'Dictionary App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body className={popins.className} >
        <div className="md:px-3 px-1 py-3 md:py-6 max-w-6xl md:max-w-4xl mx-auto w-full">
          <Navbar />
          <div className="mt-6">
          {children}

          </div>
        </div>
     </body>
    </html>
  )
}
