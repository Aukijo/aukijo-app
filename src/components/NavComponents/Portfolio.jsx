import React, { useState } from 'react'
import styles from '../../modules/ContentsModule/portfolio.module.css'
import ligneEssenceLogo from '../../resources/Aboutme_Resources/le.svg'
import contentStyles from '../../modules/ContentsModule/portfolioContent.module.css'
import PortfolioContent from './Contents/PortfolioContent'

export default function Portfolio() {
  const collectionDetails = {
    logo: ligneEssenceLogo,
    title: "Collection Title Go Here"
  }

  return (
    <div>
      <div className={styles.portfolio_main}>
        <div className={`${styles.portfolio_head} container`}>
        <div className={styles.collection_logo}>
          <div className={styles.logo_container}>
           <img src={collectionDetails.logo} alt="LE" />
          </div>
        </div>
        <div className={styles.collection_title}>
          <h3>{collectionDetails.title}</h3>
        </div>
        
        </div>
    
      </div>

    <PortfolioContent/>

    <div className={styles.portfolio_main}>
        <div className={`${styles.portfolio_head} container`}>
        <div className={styles.collection_logo}>
          <div className={styles.logo_container}>
           <img src={collectionDetails.logo} alt="LE" />
          </div>
        </div>
        <div className={styles.collection_title}>
          <h3>{collectionDetails.title}</h3>
        </div>
        
        </div>
    
      </div>


    </div>
  
  )
}
