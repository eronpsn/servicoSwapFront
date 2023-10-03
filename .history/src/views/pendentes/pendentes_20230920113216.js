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
import srcAvatares from 'src/assets/images/avatars/1.jpg'
const Pendentes = () => {
  const tarefasPendentes = [
    {
      usuario: {
        nome: 'Pedro Nou',
        avatar: srcAvatares+'1.jpg' ,
      },
      projeto:{
        descricao:'projeto de arquitetura',
        data:'10/07/2023 10:54'
      }
    },
    {
      usuario: {
        nome: 'Paulo',
        avatar: srcAvatares+'1.jpg' ,
      },
      projeto:{
        descricao:'Redes',
        data:'04/07/2023 10:54'
      }
    }
  ]
  return (
    tarefasPendentes.map((item, index) => (
    <CRow key={index} className='mt-4'>
      <CCard >
  <CCardBody>
  <CRow>
    <CCol sm={5}>
      <CCard>
        <CCardBody>

         <CCardTitle> <CAvatar size="md" src={srcAvatares} /></CCardTitle><CCardText>
            <strong>Postado em:</strong> {item.projeto.data}
          </CCardText>

        </CCardBody>
      </CCard>
    </CCol>

    <CCol sm={{span:5, offset:2}} >
      <CCard>
        <CCardBody>
          <CCardTitle>Solicitou:</CCardTitle>
          <CCardText>
          projeto de arquitetura
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
 ))
  )
}

export default Pendentes
