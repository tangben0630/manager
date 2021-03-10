import React from 'react'
import { useAaa } from './Com'
interface Props {
  value: any,
}
const Zu2: React.FC<Props> = ({ value }) => {
  const aaa = useAaa()
  return <div onClick={() => { aaa(value) }}>
    {value}
  </div>
}
export default Zu2