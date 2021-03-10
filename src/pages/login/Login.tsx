import React from 'react'
import { useDispatch, useStore } from 'react-redux'
import { useParams } from 'react-router-dom'
import { List1 } from '../../components/list/List1'

export const Login: React.FC = (props) => {
  const params = useParams()
  console.log(params, 'params', props);
  const dist = useDispatch()
  const sto = useStore().getState()
  console.log(sto.otherFn);
  const s = () => {
    const action = {
      type: 'AAA'
    }
    dist(action)
    console.log(sto.otherFn);

  }
  return <div>
    login页面
    <div>
      <button onClick={() => { s() }}>123</button>
    </div>
    <div>{sto.otherFn.name}</div>
    <List1></List1>

  </div>
}