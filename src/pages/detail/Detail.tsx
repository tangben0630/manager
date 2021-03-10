import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
interface Props {
  id: string
}
export const Detail: React.FC<RouteComponentProps<Props>> = (props) => {

  return <div>
    detail页面 + {props.match.params.id}
  </div>
}