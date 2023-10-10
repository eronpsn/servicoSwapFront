/* eslint-disable prettier/prettier */
import { React, useEffect, useState, useRef } from 'react'
import { apiRequest } from "../../api/config";
import { Newtoast } from "../../components/Toasts"
import { NewModalTarefa } from "../../components/Modal"
import { NewModalConfirm } from "../../components/ModalConfirm"
import {
  CCard,
  CCardBody,
  CCol,
  CAvatar,
  CRow,
  CCardTitle,
  CCardText,
  CButton,
  CToaster
} from '@coreui/react'
import moment from "moment";
import srcAvatar from 'src/assets/images/avatars/perfil.jpg'
const Pendentes = () => {
  const [toast, addToast] = useState(0)
  const toaster = useRef()
  const [visibleModal, setVisibleModal] = useState(false)
  const [visibleModalConfirm, setVisibleModalConfirm] = useState(false)
  const [idTarefa, setIdTarefa] = useState('')
  const [dscTarefa, setDscTarefa] = useState('')
  const [acao, setAcao] = useState('')
  const [marthAtualizar, setMarthAtualizar] = useState(15)
  const [tarefasPendentes, setTarefasPendentes] = useState([])
  const token = sessionStorage.getItem("token");
  const iduser = sessionStorage.getItem("iduser");

  const gerarNumeroAleatorio = () => {
    return Math.floor(Math.random() * (1 - 101)) + 45;
  }
  const getAllAtividades = async () => {
    const headers = {
      'x-token': token
    };
    const result = await apiRequest('tarefas', 'GET', '', headers)
    setTarefasPendentes(result.dados)

  }

  const handleTarefa = async (descricao) => {
    const headers = {
      'x-token': token
    };
    if (idTarefa === '') {
      const body = { descricao: descricao }
      const result = await apiRequest('tarefas/nova-tarefa', 'POST', body, headers)
      if (result.success === true) {
        setMarthAtualizar(gerarNumeroAleatorio)
        addToast(Newtoast(result.message))  // adicionar na API a message de retorno
      } else {
        addToast(Newtoast(result.message))
      }
    } else {
      const body = { descricao: descricao, id_tarefa: idTarefa }
      const result = await apiRequest('tarefas/editar-tarefa', 'PUT', body, headers)
      if (result.success === true) {
        setMarthAtualizar(gerarNumeroAleatorio)
        addToast(Newtoast(result.message))
      } else {
        addToast(Newtoast(result.message))
      }
    }
  };

  const handleConfirmTarefa = async (idtarefa) => {
    const headers = {
      'x-token': token
    };
    const body = { id_tarefa: idtarefa }
    switch (acao) {
      case 'E': const result = await apiRequest('tarefas/excluir-tarefa', 'DELETE', body, headers)
      if (result.success === true) {
        setMarthAtualizar(gerarNumeroAleatorio)
        addToast(Newtoast(result.message))
      } else {
        addToast(Newtoast(result.message))
      }
        break;
      case 'P': const r = await apiRequest('tarefas/pegar-tarefa', 'PUT', body, headers)
      if (r.success === true) {
        setMarthAtualizar(gerarNumeroAleatorio)
        addToast(Newtoast(r.message))
      } else {
        addToast(Newtoast(r.message))
      }
        break;
      default:
        break;
    }

  };

  const showConfirm = (idtarefa, dscTarefa, acao) => {
    setVisibleModalConfirm(!visibleModalConfirm)
    setIdTarefa(idtarefa)
    setDscTarefa(dscTarefa)
    setAcao(acao)
  }
  const showModalTarefa = (idtarefa, dscTarefa) => {
    setVisibleModal(!visibleModal)
    setIdTarefa(idtarefa)
    setDscTarefa(dscTarefa)
  }
  useEffect(() => {
    getAllAtividades();
  }, [marthAtualizar]);



  return (
    <CRow className='mt-12'>

      <CCol xs="auto" >
        <CButton onClick={() => showModalTarefa('', '')}>Nova tarefa </CButton>
      </CCol>

      <NewModalTarefa
        visible={visibleModal}
        onClose={() => setVisibleModal(false)}
        onSave={handleTarefa}
        descricaoTarefa={dscTarefa}
      />
      <NewModalConfirm
        visible={visibleModalConfirm}
        onClose={() => setVisibleModalConfirm(false)}
        onSave={handleConfirmTarefa}
        idTarefa={idTarefa}
        dscTarefa={dscTarefa}
        acao={acao}
      />
      {tarefasPendentes.map((item, index) => (

        <CRow key={index} className='mt-4'>
          <CCard >
            <CCardBody>
              <CRow>
                <CCol sm={5}>
                  <CCard style={{ minHeight: '10rem' }}>
                    <CCardBody>
                      <CCardTitle> <CAvatar size="md" src={srcAvatar} /></CCardTitle><CCardText>
                        <strong>Postado em:</strong> {moment(new Date(item.data_criacao)).format("DD/MM/YYYY hh:mm")}
                      </CCardText>

                    </CCardBody>
                  </CCard>
                </CCol>

                <CCol sm={{ span: 5, offset: 2 }} >
                  <CCard style={{ minHeight: '10rem' }}>
                    <CCardBody>
                      <CCardTitle>Solicitou:</CCardTitle>
                      <CCardText>
                        {item.descricao}
                      </CCardText>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
              <div className=" mt-2" >
                {iduser === item.solicitante_id && (
                  <div>
                    <CButton color="danger" type='button' onClick={() => showConfirm(item.id, item.descricao, 'E')} >EXCLUIR</CButton>
                    <CButton color="primary" type='button' className='mx-2' onClick={() => showModalTarefa(item.id, item.descricao)}>EDITAR</CButton>
                  </div>
                )}
                {iduser !== item.solicitante_id && <CButton color="primary" type='button' onClick={() => showConfirm(item.id, item.descricao, 'P')}>PEGAR TAREFA</CButton>}
              </div>
              <CToaster ref={toaster} push={toast} placement="top-end" />
            </CCardBody>
          </CCard>
        </CRow>
      ))
      }
    </CRow>
  )

}

export default Pendentes
