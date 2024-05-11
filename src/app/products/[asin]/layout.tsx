

import Navbar from '@/src/components/nav_bar/Navbar'
import { Viewport } from 'next'





export const viewport: Viewport = {
  maximumScale: 1,
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Navbar />
        {children}
       
    </div>
  )
}