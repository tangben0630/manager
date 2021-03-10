import React from 'react'
import styles from './he.module.css'
import { changeType, changeFn } from '../../redux/list/listActions'
import { useSelector2 } from '../../redux/hooks'
import { useDispatch } from 'react-redux'

const Head: React.FC = (props) => {
  const lan = useSelector2((state) => {
    return state.ListReducer.lan
  })
  const dispatch = useDispatch()
  const change = () => {
    const action: changeType = changeFn('666', 'CH')
    dispatch(action)
  }
  return <div className={styles['he']} onClick={() => { change() }}>
    {lan}
  </ div>
}



export default Head