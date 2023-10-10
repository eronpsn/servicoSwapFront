/* eslint-disable prettier/prettier */
import { React, useState } from 'react'
import PropTypes from 'prop-types';
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
  CFormInput
} from '@coreui/react';

export const NewModalConfirm = ({ visible, onClose, onSave, idTarefa, dscTarefa, acao }) => {

  const handleConfirm = () => {
      onSave(idTarefa);
      onClose();
  };

  return (
    <CModal
      backdrop="static"
      alignment="center"
      visible={visible}
      onClose={onClose}
      aria-labelledby="StaticBackdropExampleLabel"
    >
      <CModalHeader>
        <CModalTitle id="StaticBackdropExampleLabel">Atenção</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CFormInput hidden value={idTarefa}/>
        <CFormInput hidden value={acao}/>
       { {
        'E':<p>Deseja realmente <strong>excluir</strong> a tarefa: <strong> {dscTarefa}</strong>?</p>,
        'P':<p>Deseja realmente <strong>pegar</strong> pegar a tarefa: <strong> {dscTarefa}</strong>?</p>
       }[acao]
      
       }
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={onClose}>
          Fechar
        </CButton>
        <CButton color="primary" onClick={handleConfirm}>
          Confirmar
        </CButton>
      </CModalFooter>
    </CModal>
  );
};


NewModalConfirm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  visible: PropTypes.func.isRequired,
  idTarefa: PropTypes.func.isRequired,
  dscTarefa: PropTypes.func.isRequired,
  acao: PropTypes.func.isRequired
};
