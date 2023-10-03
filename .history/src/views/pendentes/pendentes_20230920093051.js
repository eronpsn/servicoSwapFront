/* eslint-disable prettier/prettier */
import React from 'react'
import {
  CCard,
  CCardBody,
  CCol,
  CAvatar,
  CRow,
  CCardTitle,
  CCardText,
  CButton,
} from '@coreui/react'
import avatar1 from 'src/assets/images/avatars/1.jpg'
const Pendentes = () => {
  return (
    <CRow>
      <CCard>
  <CCardBody>
  <CRow>
    <CCol sm={5}>
      <CCard>
        <CCardBody>
          <CCardTitle> <CAvatar size="md" src={avatar1} /></CCardTitle>
          <CCardText>
            Postado em: 10/07/2023 10:52
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
  <div className="row justify-content-end d-grid gap-2 m-3">
  <CButton color="primary" type='button'>PEGAR TAREFA</CButton>
  </div>
  </CCardBody>
</CCard>
     </CRow>

  )
}

export default Pendentes
