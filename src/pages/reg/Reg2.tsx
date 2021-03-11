import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from '../../redux/store'
import { addSignFn } from '../../redux/test/testActions'
import { Form, Input, Button, Checkbox } from 'antd';

const mapStateToProps = (state: RootState) => {
  return {
    name: state.TestReducer.name,
    age: state.TestReducer.age,
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    nihao: () => {
      dispatch(addSignFn())
    }
  }
}
type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

export class reg extends React.Component<Props> {
  render() {
    return <div>
      zhuce页面 {this.props.name}
      <button onClick={() => { this.props.nihao() }}>123</button>


    </div>
  }
}

export const reg2 = connect(mapStateToProps, mapDispatchToProps)(reg)



