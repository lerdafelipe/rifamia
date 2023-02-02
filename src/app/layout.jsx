import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import './globals.css'

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        <div className='minHeight'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
