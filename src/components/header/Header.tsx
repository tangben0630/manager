import React, { useState } from 'react'
import styles from './header.module.css'
import logo from '../../logo.svg'
import { Layout, Typography, Input, Dropdown, Menu, Button } from 'antd'
import { useHistory } from 'react-router-dom'
import { useSelector } from '../../redux/hooks'
import { useDispatch } from 'react-redux'
interface Props {
  change?: Function
}
export const Header: React.FC<Props> = (props) => {
  const [la, setLa] = useState<string>()
  const dispatch = useDispatch()
  const language = useSelector((state) => {
    return state.language.language
  })

  const history = useHistory()
  const toLogin = () => {
    history.push({ pathname: '/login', state: { a: 2 } })
  }
  const toReg = () => {
    history.push({ pathname: '/reg' })
  }
  return <>
    <div className={styles['app-header']}>
      {/* top-header */}
      <div className={styles['top-header']}>
        <div className={styles['inner']}>
          <Typography.Text>{la}</Typography.Text>
          <Dropdown.Button style={{ marginLeft: 15 }} overlay={
            <Menu>
              <Menu.Item>中文</Menu.Item>
              <Menu.Item>英语</Menu.Item>
            </Menu>
          }>
            语言
          </Dropdown.Button>
          <Button.Group className={styles['btn-group']}>
            <Button onClick={() => { toLogin() }}>登录</Button>
            <Button onClick={() => { toReg() }}>注册</Button>
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
