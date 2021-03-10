import React from 'react'
// import styles from './prod.module.css'
import { withRouter, RouteComponentProps, Link } from 'react-router-dom'
import { Typography, Image } from 'antd'
interface Props extends RouteComponentProps {
  title: string,
  img: string,
  price: string | number,
  size: string,
  id: number | number
}
// git@github.com:tangben0630/zhihu.git
const ProdItemCom: React.FC<Props> = ({ title, id, size, img, price, history }) => {
  return <Link to={`/detail/${id}`}>
    {
      size === 'large' ?
        <Image src={img} height={285} width={490} /> :
        <Image src={img} height={120} width={240} />
    }
    <div>
      <Typography.Text type='secondary'>
        {title.slice(0, 10)}
      </Typography.Text>
      <Typography.Text type='danger'>
        ${price}起
      </Typography.Text>
    </div>
  </Link>

}

export const ProdItem = withRouter(ProdItemCom)
