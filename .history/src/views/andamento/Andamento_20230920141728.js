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
const Andamento = () => {
  const tarefasPendentes = [
    {
      usuario: {
        nome: 'Pedro Nou',
        avatar: srcAvatares+'1.jpg' ,
      },
      projeto:{
        descricao:'projeto de arquitetura',
        dataInicio:'10/07/2023 10:54'
      },
      executor: {
        nome: 'Pedro Nou',
        avatar: srcAvatares+'1.jpg' ,
      }
    },
    {
      usuario: {
        nome: 'Paulo',
        avatar: srcAvatares+'1.jpg' ,
      },
      projeto:{
        descricao:'Redes',
        dataInicio:'04/07/2023 10:54'
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

         <CCardTitle> <CAvatar size="md" src={srcAvatares} /></CCardTitle>
         <CCardText>
            <strong>Precisou de:</strong> {item.projeto.descricao}
          </CCardText>
          <CCardText>
            <strong>Iniciou em:</strong> {item.projeto.dataInicio}
          </CCardText>
        </CCardBody>
      </CCard>
    </CCol>

    <CCol sm={{span:5, offset:2}} >
      <CCard>
        <CCardBody>
          <CCardTitle>Contribuinte:</CCardTitle>
          <CCardText>
          {item.executor.nome}
          </CCardText>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
  <div className=" mt-2" >
  <CButton color="danger" type='button' >EXCLUIR</CButton>
  <CButton color="primary" type='button'className='mx-2'>EDITAR</CButton>
  <CButton color="primary" type='button'>PEGAR TAREFA</CButton>
  </div>
  </CCardBody>
</CCard>
     </CRow>
 ))
  )
}

export default Andamento
