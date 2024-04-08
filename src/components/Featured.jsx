import React from 'react'
import styles from "../modules/LandingBody.module.css"
import Ylinx from '../resources/Ylinx.svg'
import Quxiuas from '../resources/Quxiuas.svg'
import Seretin from '../resources/Seretin.svg'

export default function Featured() {
    const ftr_artworks = {
        ftr_Ylinx: {
            Author: "Aukijo Arts"  ,
            Artname: "Ylinx"  ,
            Size: "1080 x 1920"
        },
        ftr_Seretin: {
            Author: "Aukijo Arts"  ,
            Artname: "Seretin"  ,
            Size: "1080 x 1920"
        },
        ftr_Quxiuas: {
            Author: "Aukijo Arts"  ,
            Artname: "Quxiuas"  ,
            Size: "1080 x 1920"
        }
    }
  return (
    <div className={styles.ftr_img_cont}>
        <div className={styles.ftr_content_a} >
            <img className={styles.ftr_img} src={Ylinx}alt="Ylinx" />
            <div className={styles.img_identifier}>
                <div className={styles.ftr_sz_nm}>
                    <p>{ftr_artworks.ftr_Ylinx.Author}</p>
                    {/* <p>{ftr_artworks.ftr_details.Size}</p> */}
                </div>
                <h3>{ftr_artworks.ftr_Ylinx.Artname}</h3>
            </div>
        </div>

        <div className={styles.ftr_content_b}>
            <img className={styles.ftr_img} src={Quxiuas}alt="Quxiuas" />
            <div className={styles.img_identifier}>
                <div className={styles.ftr_sz_nm}>
                    <p>{ftr_artworks.ftr_Quxiuas.Author}</p>
                    {/* <p>{ftr_artworks.ftr_details.Size}</p> */}
                </div>
                <h3>{ftr_artworks.ftr_Quxiuas.Artname}</h3>
            </div>
        </div>

        <div className={styles.ftr_content_c}>
            <img className={styles.ftr_img} src={Seretin}alt="Seretin" />
            <div className={styles.img_identifier}>
                <div className={styles.ftr_sz_nm}>
                    <p>{ftr_artworks.ftr_Seretin.Author}</p>
                    {/* <p>{ftr_artworks.ftr_details.Size}</p> */}
                </div>
                <h3>{ftr_artworks.ftr_Seretin.Artname}</h3>
            </div>
        </div>

        {/* <div className={styles.img_identifier}>
            <p>{ftr_artworks.ftr_details.Author} |</p>
            <p>| {ftr_artworks.ftr_details.Size}</p>
            <h3>{ftr_artworks.ftr_details.Artname}</h3>
            
        </div> */}
    </div>
  )
}
