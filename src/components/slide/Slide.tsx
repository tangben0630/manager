import React from 'react'
import styles from './slide.module.css'
import { sideMenuList } from './mock'
import { Menu } from 'antd'
export const Slide: React.FC = () => {
  return <Menu mode='vertical' className={styles['slide-mean']}>
    {
      sideMenuList.map((el, index) => {
        return <Menu.SubMenu
          key={index + 'slide'}
          title={el.title}
        >
          {
            el.subMenu.map((item, i) => {
              return <Menu.SubMenu key={'aa' + i} title={item.title}>
                {
                  item.subMenu.map((mea, n) => {
                    return <Menu.Item key={'nn' + n}>
                      {mea}
                    </Menu.Item>
                  })
                }
              </Menu.SubMenu>
            })
          }
        </Menu.SubMenu>
      })
    }
  </Menu>
}
