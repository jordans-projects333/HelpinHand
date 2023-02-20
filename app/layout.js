import './globals.css'
import Header from './Header'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className='flex flex-col h-[100vh]'>
        <Header/>
        {children}
      </body>
    </html>
  )
}
