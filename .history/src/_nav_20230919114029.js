import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilSpreadsheet, cilSpeedometer, cilLibrary, cilStorage } from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'Menu',
  },
  {
    component: CNavItem,
    name: 'Home',
    to: '/home',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Pendentes',
    to: '/theme/colors',
    icon: <CIcon icon={cilLibrary} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Andamento',
    to: '/theme/typography',
    icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Gerenciamento',
    to: '/theme/typography',
    icon: <CIcon icon={cilStorage} customClassName="nav-icon" />,
  },
]

export default _nav
