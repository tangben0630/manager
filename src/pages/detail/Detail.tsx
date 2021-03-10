import React, { useState, useEffect } from 'react'
import { RouteComponentProps, useParams } from 'react-router-dom'
import axios from 'axios'
import { Header, Footer } from '../../components'
import { Spin } from 'antd'
import styles from './detail.module.css'
interface MatchParams {
  id: string
}
export const Detail: React.FC<RouteComponentProps<MatchParams>> = (props) => {
  const { id } = useParams<MatchParams>()
  console.log(id, '999', useParams());

  const [loading, setLoading] = useState<boolean>(true)
  const [prods, setProds] = useState<any>(null)
  const [err, setErr] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    axios.get('http://123.56.149.216:8080/api/touristRoutes/' + id, {
      headers: {
        'x-icode': '3D50B8E3B1DFC232'
      }
    }).then(res => {
      setLoading(false)
      console.log(res.data, '===');
      setProds(res.data)
    })
  }, [])
  return <div>
    <Header></Header>
    detail页面 + {props.match.params.id},zheshiid
    <div>

    </div>
    <Footer></Footer>
  </div>
}