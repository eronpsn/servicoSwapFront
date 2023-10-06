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

export const NewModalConfirm = ({ visible, onClose, onSave, idTarefa, dscTarefa }) => {

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
      <p>Deseja realmente excluir a tarefa: <strong> {dscTarefa}</strong>?</p>
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
  dscTarefa: PropTypes.func.isRequired
};
