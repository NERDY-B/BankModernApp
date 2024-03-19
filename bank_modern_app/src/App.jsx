import React from 'react'
import styles from './style'

import { Navbar,  Stats,  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA ,
  Hero,
  Footer } from './component'

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>

      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>

  </div>
)

export default App

// <button onClick={() => setCount((count) => count + 1)}>
// count is {count}
// </button>