import { React, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CSpinner,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { apiRequest } from '../../../api/config'

const Register = () => {
  const [errorState, setErrorState] = useState({
    error: false,
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [username, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repetePassword, setRepetePassword] = useState('')

  const handleNovoUsuario = async () => {
    setLoading(true)
    setErrorState({
      error: false,
      message: '',
    })
    if (username !== '' && userEmail !== '' && password !== '' && repetePassword !== '') {
      const body = { nome: username, email: username, senha: password }
      const result = await apiRequest('users/novo-usuario', 'POST', body)
      if (result.code === 'ERR_BAD_RESPONSE' || result.success === false) {
        setErrorState({
          error: true,
          message: result.message,
        })
        setLoading(false)
      } else {
        sessionStorage.setItem('token', result.token)
        sessionStorage.setItem('user', result.user.nome)
        sessionStorage.setItem('iduser', result.user.id)
        setLoading(false)
        window.location.assign('/#/home')
      }
    }
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Registro</h1>
                  <p className="text-medium-emphasis">Crie sua conta</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Nome"
                      autoComplete="nome"
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      placeholder="Email"
                      autoComplete="email"
                      onChange={(e) => setUserEmail(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Senha"
                      autoComplete="nova-senha"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Repita senha"
                      autoComplete="nova-senha"
                      onChange={(e) => setRepetePassword(e.target.value)}
                    />
                  </CInputGroup>
                  {errorState.error && <span style={{ color: 'red' }}>{errorState.message}</span>}
                  <div className="d-grid">
                    <CButton disabled={loading} color="success" onClick={() => handleNovoUsuario()}>
                      {loading && <CSpinner component="span" size="sm" aria-hidden="true" />}
                      {loading ? 'Aguarde...' : 'Criar Conta'}
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
