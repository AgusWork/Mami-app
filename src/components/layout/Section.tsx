import React from 'react'

const Section = ({children , className } : {children: React.ReactNode, className : string} ) => {
  return (
    <section className={`${className} px-4 md:px-8 lg:px-16 py-12 md:py-20 max-w-4xl mx-auto`}>
      {children}
    </section>
  )
}

export default Section
