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
    to: '/pendentes',
    icon: <CIcon icon={cilLibrary} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Andamento',
    to: '/andamento',
    icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
  },
  /*  {
    component: CNavItem,
    name: 'Gerenciamento',
    to: '/base',
    icon: <CIcon icon={cilStorage} customClassName="nav-icon" />,
  },*/
]

export default _nav
