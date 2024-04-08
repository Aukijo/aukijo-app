import React from 'react'
import f_style from '../modules/Footer.module.css'
import fb from '../resources/facebookLogo.svg'
import ig from '../resources/Instagram_logo.svg'
import twitter from '../resources/twitter_logo.svg'
import logo from "../resources/WonderGaleria.svg"

export default function Footer() {
  return (
    <div>
        <nav className={f_style.footer_cont}>
            <div className={f_style.soc_med_cont}>
                <div className={f_style.line}></div>
                <ul className={f_style.soc_med}>
                    <li>
                        <a className={f_style.soc_med_links} href="/"> 
                        <img className ={f_style.sc_logo} src={ig} alt="FB" /> 
                        </a>
                    </li>
                    <li>
                        <a className={f_style.soc_med_links} href="/">
                        <img className ={f_style.sc_logo} src={fb} alt="FB" />   
                        </a>
                    </li>
                    <li>
                        <a className={f_style.soc_med_links} href="/">
                        <img className ={f_style.sc_logo} src={twitter} alt="FB" />
                        </a>
                    </li>
                </ul>
                <div className={f_style.line}></div>
            </div>
            
            <div className={f_style.copyright}>
                <img  className={f_style.logo} src={logo} alt="Logo" />
                <p>Copyright © 2024 Wonder Galerie</p>
                <p>"Where art meets the Strange and Bizzare"</p>
            </div>
            
        </nav>
    </div>
  )
}


// Icon Attributes

// {/* <a href="https://www.flaticon.com/free-icons/facebook" title="facebook icons">Facebook icons created by Freepik - Flaticon</a> */}