import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { RouteComponentProps, useParams } from 'react-router-dom'
import { Header, Footer } from '../../components'
import { useDispatch } from 'react-redux'
import { useSelector2 } from '../../redux/hooks'
import { produceSlice, getProdetail } from '../../redux/detail/slice'
import { Spin } from 'antd'
import styles from './detail.module.css'
interface MatchParams {
  id: string
}
export const Detail: React.FC<RouteComponentProps<MatchParams>> = (props) => {
  const { id } = useParams<MatchParams>()

  // const [loading, setLoading] = useState<boolean>(true)
  // const [prods, setProds] = useState<any>(null)
  // const [err, setErr] = useState<string | null>(null)

  const { loading, error, data } = useSelector2(state => {
    return state.prodetail
  })
  const dis = useDispatch()
  useEffect(() => {
    dis(getProdetail(id))
  }, [])
  if (loading) {
    return <Spin />
  } else {
    return <div>
      <Header></Header>

      <div className={styles['title']}>
        {data.title}
      </div>
      <Footer></Footer>
    </div>

  }

}