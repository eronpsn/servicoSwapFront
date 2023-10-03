/* eslint-disable prettier/prettier */
import React from 'react'
import {
  CCard,
  CCardBody,
  CCol,
  CCardHeader,
  CRow,
  CCardTitle,
  CCardText,
  CButton,
} from '@coreui/react'

const Pendentes = () => {
  return (
  <CRow>
    <CCol sm={6}>
      <CCard>
        <CCardBody>
          <CCardTitle>Special title treatment</CCardTitle>
          <CCardText>
            With supporting text below as a natural lead-in to additional content.
          </CCardText>
          <CButton href="#">Go somewhere</CButton>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol sm={6}>
      <CCard>
        <CCardBody>
          <CCardTitle>Special title treatment</CCardTitle>
          <CCardText>
            With supporting text below as a natural lead-in to additional content.
          </CCardText>
          <CButton href="#">Go somewhere</CButton>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
  )
}

export default Pendentes
