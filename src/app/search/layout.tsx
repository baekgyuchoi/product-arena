
import { Viewport } from 'next'
// import NavBar from '../components/NavBar'




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

        {children}
       
    </div>
  )
}