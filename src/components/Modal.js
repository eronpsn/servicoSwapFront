/* eslint-disable prettier/prettier */
import { React, useEffect, useState } from 'react'
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
  //console.log(descricaoTarefa)
  const [dscTarefa, setDscTarefa] = useState('');
  const [errorState, setErrorState] = useState({
    error: false,
    message: '',
  });
  //
  const handleTextareaChange = (e) => {
    setDscTarefa(e.target.value);
  };

  const handleSave = () => {
    if (dscTarefa === '' && descricaoTarefa === '') {
      setErrorState({ error: true, message: 'Preencha a descrição da tarefa' });
    } else {
      const t = (dscTarefa === '') ? descricaoTarefa : dscTarefa;
      onSave(t);
      setDscTarefa('');
      onClose();
    }
  };

  const handleOnClose=()=>{
    setDscTarefa('');
    onClose();
  }
  useEffect(() => {
    if (descricaoTarefa !== dscTarefa) {
      setDscTarefa(descricaoTarefa);
    }
  }, [descricaoTarefa]);

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
                value={dscTarefa}
                id="exampleFormControlTextarea1"
                label="Descrição: "
                rows={3}
                onChange={handleTextareaChange}
              ></CFormTextarea>
            </CInputGroup>
            {errorState.error && dscTarefa === '' && descricaoTarefa === '' && (
              <span style={{ color: 'red' }}>{errorState.message}</span>
            )}
          </CForm>
        </div>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={handleOnClose}>
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
