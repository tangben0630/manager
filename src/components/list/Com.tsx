import React from 'react'
import { Props } from './Zu'
export const withCom = (ChildComponent: React.ComponentType<Props>) => {
  return (props) => {
    const aaa = (value) => {
      if (value > 2) {
        console.log(123);
      } else {
        console.log(456);
      }
    }
    return <ChildComponent {...props} aaa={aaa} />
  }
}

export const useAaa = () => {
  const aaa = (value) => {
    if (value > 2) {
      console.log(123);
    } else {
      console.log(456);
    }
  }
  return aaa
}