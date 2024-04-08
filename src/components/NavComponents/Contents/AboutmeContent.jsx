import React from 'react'
import style_more from '../../../modules/ContentsModule/AboutmeContent.module.css'
import wg from "../../../resources/Aboutme_Resources/wg.svg"
import le from "../../../resources/Aboutme_Resources/le.svg"
import aukijo from "../../../resources/Aboutme_Resources/aukijo.svg"
import { NavLink } from 'react-router-dom'
import Portfolio from '../Portfolio'

export default function Projects({link}) {
  const page_descriptions = {
      
    le: {
      description:'A collection of Artwork that mainly uses line of different weights and styles and a combination of 3-4 colors, "Ligne Essence" to me means to capture the essence of a subject using lines, resulting to a clean and  minimalist masterpiece',

      name:"Ligne Essence"
    },
    wg: {
      description:'A website I created using React.js and CSS. This website serves as the main house of all my Ideas, this also showcase my Web Development capability.',

      name:"Wonder Galerie"
    },
    aukijo: {
      description:' "Aukijo" is a name I mainly use online, I created a logo so people can easily recognize me',

      name:"Aukijo"
    },

  }

  return (
    <div className={`${style_more.page_more} container`} >
        <div className={style_more.social_cont}>
          <div className={style_more.grid_a}>
            <img className= {style_more.social_link} src={wg} alt="Wg" />
            <h1>
              {page_descriptions.wg.name}
              </h1>
          </div>
            
          <div className={style_more.grid_b}>
            <img className= {style_more.social_link} src={aukijo} alt="Aukijo" />
            <h1>{page_descriptions.aukijo.name}</h1>
          </div>

          <div className={style_more.grid_c}>
            <img className= {style_more.social_link} src={le} alt="Le" />
            <h1>{page_descriptions.le.name}</h1>
          </div>

          <div className={style_more.grid_d}>
            <div className={style_more.grid_content}>
              <p>{page_descriptions.wg.description}</p>
              <NavLink className={style_more.links} to="/Home">View Website</NavLink>
            </div>
          </div>

          <div className={style_more.grid_e}>

            <div className={style_more.grid_content}>
              <p>{page_descriptions.aukijo.description}</p>
            </div>

          </div>

          <div className={style_more.grid_f}>
            <div className={style_more.grid_content}>

              <p>{page_descriptions.le.description}</p>
              {/* <div className={style_more.links}>View Portfolio</div> */}

            </div>
          </div>
        </div>
    </div>
  )
}
