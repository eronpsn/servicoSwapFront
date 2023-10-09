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
  CForm,
  CInputGroup,
  CFormTextarea,
} from '@coreui/react';

export const NewModalTarefa = ({ visible, onClose, onSave, descricaoTarefa }) => {
  const [dscTarefa, setDscTarefa] = useState('');
  const [errorState, setErrorState] = useState({
    error: false,
    message: '',
  });

  const handleSave = () => {
    if (dscTarefa === '') {
      setErrorState({ error: true, message: 'Preencha a descrição da tarefa' });
    } else {
      onSave(dscTarefa);
      onClose();
    }
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
        <CModalTitle id="StaticBackdropExampleLabel">Tarefa</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <div className="">
          <CForm>
            <CInputGroup className="mb-3">
              <CFormTextarea
                text={descricaoTarefa}
                id="exampleFormControlTextarea1"
                label="Descrição: "
                rows={3}
                onChange={(e) => setDscTarefa(e.target.value)}
              ></CFormTextarea>
            </CInputGroup>
            {errorState.error && dscTarefa === '' && (
              <span style={{ color: 'red' }}>{errorState.message}</span>
            )}
          </CForm>
        </div>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={onClose}>
          Fechar
        </CButton>
        <CButton color="primary" onClick={handleSave}>
          Salvar
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

NewModalTarefa.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  visible: PropTypes.func.isRequired,
  descricaoTarefa: PropTypes.func.isRequired
};
