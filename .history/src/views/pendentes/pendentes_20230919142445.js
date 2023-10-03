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
      <CCard>
  <CCardBody>
  <CRow>
    <CCol sm={5}>
      <CCard>
        <CCardBody>
          <CCardTitle>Special title treatment</CCardTitle>
          <CCardText>
            With supporting text below as a natural lead-in to additional content.
          </CCardText>
        </CCardBody>
      </CCard>
    </CCol>

    <CCol sm={{span:5, offset:2}} >
      <CCard>
        <CCardBody>
          <CCardTitle>Special title treatment</CCardTitle>
          <CCardText>
            With supporting text below as a natural lead-in to additional content.
          </CCardText>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
  <div className="row justify-content-end d-grid gap-2 border-top-3">
  <CButton color="primary" type='button'>PEGAR TAREFA</CButton>
  </div>
  </CCardBody>
</CCard>
     </CRow>

  )
}

export default Pendentes
