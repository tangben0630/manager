import React from 'react'
import styles from './header.module.css'
import logo from '../../logo.svg'
import { Layout, Typography, Input, Dropdown, Menu, Button } from 'antd'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import store from '../../redux/store'


class HeaderCom extends React.Component<RouteComponentProps> {

  constructor(props) {
    super(props)
    const storeState = store.getState()
    this.state = {
      nihao: storeState.language,
    }
    store.subscribe(() => {

      const storeState = store.getState()
      console.log('nihui yunxingma ?', storeState);

      this.setState({
        nihao: storeState.language,
      })
    })
  }
  toLogin() {
    const history = this.props.history
    history.push({ pathname: '/login', state: { a: 2 } })
  }
  toReg() {
    const history = this.props.history
    history.push({ pathname: '/reg', state: { a: 2 } })
  }
  change() {
    console.log('------点击了');

    const action = {
      type: 'aaa',
      value: 'en'
    }
    store.dispatch(action)
  }
  render() {
    return <> 
      <div className={styles['app-header']}>
        {/* top-header */}
        <div className={styles['top-header']} onClick={() => { this.change() }}>
          <div className={styles['inner']}
          >
            <Typography.Text>{(this.state as any).nihao}89</Typography.Text>
            <Dropdown.Button style={{ marginLeft: 15 }} overlay={
              <Menu>
                <Menu.Item>中文</Menu.Item>
                <Menu.Item>英语</Menu.Item>
              </Menu>
            }>
              语言
          </Dropdown.Button>
            <Button.Group className={styles['btn-group']}>
              <Button onClick={() => { this.change() }}>登录</Button>
              <Button onClick={() => { this.toReg() }}>注册</Button>
            </Button.Group>
          </div>
        </div>
        <Layout.Header className={styles['main-header']}>
          <img src={logo} alt="" className={styles['app-logo']} />
          <Typography.Title className={styles['title']} level={3}>鹰眼</Typography.Title>
          <Input.Search placeholder={'请输入...'} className={styles['sear']} />
        </Layout.Header>
        <Menu className={styles['main-menu']} mode={'horizontal'}>
          <Menu.Item key={1}>国际旅游</Menu.Item>
          <Menu.Item key={2}>同城旅游</Menu.Item>
          <Menu.Item key={3}>单人游</Menu.Item>
          <Menu.Item key={4}>组团游</Menu.Item>
          <Menu.Item key={5}>峡谷游</Menu.Item>
          <Menu.Item key={6}>郊游</Menu.Item>
        </Menu>
      </div>
    </>
  }
}

export const Header = withRouter(HeaderCom)
