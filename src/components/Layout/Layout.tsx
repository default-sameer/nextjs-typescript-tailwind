import React from 'react'
import Header from './Header'
import Footer from './Footer'
interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex grow items-center justify-center">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
