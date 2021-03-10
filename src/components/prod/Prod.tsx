import React from 'react'
import styles from './prod.module.css'
import { Divider, Row, Col } from 'antd'
import { ProdItem } from './Item'
interface Props {
  title: JSX.Element,
  image: string,
  prods: any[]
}
export const Prod: React.FC<Props> = ({ title, image, prods }) => {
  return <div className={styles.content}>
    <Divider orientation='left'>
      {title}
    </Divider>
    <Row>
      <Col span={4}>
        <img src={image} alt="" className={styles['slide-img']} />
      </Col>
      <Col span={20}>
        <Row>
          <Col span={12}>
            <ProdItem
              size={'large'}
              title={prods[0].title}
              price={prods[0].price}
              img={prods[0].touristRoutePictures[0].url}
              id={prods[0].id} />
          </Col>
          <Col span={12}>
            <Row>
              <Col span={12}>
                <ProdItem
                  size={'small'}
                  title={prods[1].title}
                  price={prods[1].price}
                  img={prods[1].touristRoutePictures[0].url}
                  id={prods[1].id} />
              </Col>
              <Col span={12}>
                <ProdItem
                  size={'small'}
                  title={prods[2].title}
                  price={prods[2].price}
                  img={prods[2].touristRoutePictures[0].url}
                  id={prods[2].id} />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <ProdItem
                  size={'small'}
                  title={prods[3].title}
                  price={prods[3].price}
                  img={prods[3].touristRoutePictures[0].url}
                  id={prods[3].id} />
              </Col>
              <Col span={12}>
                <ProdItem
                  size={'small'}
                  title={prods[4].title}
                  price={prods[4].price}
                  img={prods[4].touristRoutePictures[0].url}
                  id={prods[4].id} />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <ProdItem
              size={'small'}
              title={prods[5].title}
              price={prods[5].price}
              img={prods[5].touristRoutePictures[0].url}
              id={prods[5].id} />
          </Col>
          <Col span={6}>
            <ProdItem
              size={'small'}
              title={prods[5].title}
              price={prods[5].price}
              img={prods[5].touristRoutePictures[0].url}
              id={prods[5].id} />
          </Col><Col span={6}>
            <ProdItem
              size={'small'}
              title={prods[6].title}
              price={prods[6].price}
              img={prods[6].touristRoutePictures[0].url}
              id={prods[6].id} />
          </Col><Col span={6}>
            <ProdItem
              size={'small'}
              title={prods[7].title}
              price={prods[7].price}
              img={prods[7].touristRoutePictures[0].url}
              id={prods[7].id} />
          </Col>
        </Row>
      </Col>
    </Row>
  </div>

}
