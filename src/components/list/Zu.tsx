import React from 'react'
import { withCom } from './Com'

export interface Props {
  value: any,
  aaa: any
}
const Zu: React.FC<Props> = ({ value, aaa }) => {
  // const aaa = (value) => {
  //   console.log(123);
  // }
  return <div onClick={() => { aaa(value) }}>
    {value}
  </div>
}

export default withCom(Zu)