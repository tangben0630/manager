import React from 'react'
import styles from './banner.module.css'
import { Carousel, Image } from 'antd'
import c1 from '../../assets/images/carousel_1.jpg'
import c2 from '../../assets/images/carousel_2.jpg'
import c3 from '../../assets/images/carousel_3.jpg'
export const Banner: React.FC = () => {
  return <Carousel autoplay className={styles['banner']}>
    <Image src={c1}></Image>
    <Image src={c2}></Image>
    <Image src={c3}></Image>
  </Carousel>

}
