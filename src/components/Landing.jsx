import React from 'react'
import styles from '../modules/LandingBody.module.css'
import Footer from './Footer'
// import globalStyles from '../Global.css'

import Featured from './Featured'
// Wonder Galerie, Where art meets the Strange and Bizarre
export default function Landing() {
  return (
    <div>
    <div className={`${styles.landing_content} container`}>
        <div className={styles.txt_intro}>
          <div className={styles.txt_cont}>
            <div className={styles.title_main} >
              <h1 className={styles.title_a} >Wonder</h1>
              <p className={styles.title_d}>Galerie</p>
            </div>
              
            <div className={styles.intro_cont}>
              <p className={styles.desc}>Embark on a journey through the extraordinary and surreal artworks that will fire up your imagination!</p>
            </div>
          </div>
          <Featured/>
            
        </div>   
    </div>

    </div>
  )
}
