import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
import styles from "../../modules/Navbar.module.css"



export default function Artworks() {

  const className = ({isActive})=> [isActive ? styles.link_active : styles.link];
  return (
    <div>
      <header>
        <NavLink className={className} to='Story'>Story </NavLink>
        <NavLink className={className} to='Cards'>Cards </NavLink>
      </header>
        <main>
        <Outlet/>
        </main>
    </div>

  )
}
