import React from 'react'
import style_about from "../../modules/ContentsModule/Aboutme.module.css"
import fb from "../../resources/Aboutme_Resources/fb.svg"
import ig from "../../resources/Aboutme_Resources/ig.svg"
import twitter from "../../resources/Aboutme_Resources/twitter.svg"


import profile from "../../resources/Aboutme_Resources/profile.png"
import More from './Contents/AboutmeContent'
import Portfolio from './Portfolio'
import { Outlet } from 'react-router-dom'

export default function AboutMe() {

  return (
    <div>
      <div className={`${style_about.page_main} container`}>
        <div className={style_about.page_container}>
        <div className={style_about.cont_a}>
          <h1 className={style_about.i}>I</h1>
          <h1 className={style_about.am}> AM</h1>
        </div>
        <div className={style_about.cont_b}>
          <h2>Mark Roden</h2>
          <h1>SANTUELE</h1>
        </div>
        <div className={style_about.cont_c}>
          <div className={style_about.tag_cont}>
            <p className={style_about.tag_a}>
            A self-taught Graphic Designer and Web Developer with a passion for crafting visually captivating experiences. Through self-driven learning and hands-on experience, I've honed my skills in both graphic design and web development to deliver engaging and effective solutions.
            </p>
            <p className={style_about.tag_a}>
            My journey into this dynamic field began with a curiosity for design and a desire to create impactful digital experiences. Over the years, I've immersed myself in various design principles, mastering tools and techniques to bring ideas to life. From conceptualizing visually stunning graphics to coding responsive and user-friendly websites, I thrive on turning visions into reality.
            </p>
          </div>

          <p className={style_about.tag_b}>
          "Empower Your Vision through Design and Code."
          </p>

          <div className={style_about.links_cont}>
            <div className={style_about.proper_link}>

                <div className={style_about.social_head}>
                  <h2>Follow me</h2>
                </div>

                <div className={style_about.social_cont}>
                  <a href='https://twitter.com/Aukijo'>
                    <img className= {style_about.social_link} src={twitter} alt="twitter" />
                  </a>
                  <a href='https://www.facebook.com/Aukijo07'>
                    <img className= {style_about.social_link} src={fb} alt="facebook" />
                  </a>
                  <a href='https://www.instagram.com/aukijo/'>
                    <img className= {style_about.social_link} src={ig} alt="instagram" />
                  </a>
                </div>

            </div>
            
          </div>
        </div>
        <div className={style_about.cont_d}>
          <img  width="450px" height="450px" src={profile} alt="Profile" />
        </div>
        </div>
      </div>
      <div>
      </div>

      <More/>
      <div>
      <Portfolio />
      </div>
      
    </div>
    
  )
}
