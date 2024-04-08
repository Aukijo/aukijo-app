import React, { useState } from 'react'
import { Outlet ,NavLink} from 'react-router-dom'
import styles from "../modules/Navbar.module.css"
import logo from "../resources/WonderGaleria.svg"

export default function RootLayout() {

  const className = ({isActive})=> [isActive ? styles.link_active : styles.link];
  
  return (
    <div>
        <header className={`${styles.nav_main}`}> 
            <nav className={`${styles.nav} `}>

              <div  className={styles.nav_link}>
                <NavLink className={className} to='/'>Home </NavLink>
                <NavLink className={className} to='Contact'>Contact </NavLink>
              </div>

                <div className={styles.logo_cont}>
                  <NavLink>
                    <img src={logo} alt="" className={styles.logo} />
                  </NavLink>
                
                </div>

              <div  className={styles.nav_link}>
                <NavLink className={className} to='Aboutme'>About Me </NavLink>
                
                <NavLink className={className} to='Artworks'>Artworks</NavLink>
                
                {/* <NavLink className={`${styles.link} ${styles.get_started}`} to="Portfolio">Portfolio</NavLink> */}
              </div>

            </nav>
        </header>
        
        <main>
          <Outlet/>    
        </main>
    </div>


  )
}
