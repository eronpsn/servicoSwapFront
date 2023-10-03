import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
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

const Login = () => {
  const [errorState, setErrorState] = useState({
    error: false,
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = async () => {
    setLoading(true)
    setErrorState({
      error: false,
      message: '',
    })
    sessionStorage.setItem('token', '')
    sessionStorage.setItem('user', '')
    sessionStorage.setItem('role', '')
    const body = { email: username, senha: password, perfil: 'A' }
    const result = await apiRequest('login', 'POST', body)
    if (result.code === 'ERR_BAD_REQUEST') {
      setErrorState({
        error: true,
        message: 'Email e/ou senha inválidos.',
      })
      setLoading(false)
    }
    console.log(result.code) //ERR_BAD_REQUEST
    console.log(result.status)
    console.log(result)
    setLoading(false)
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Email"
                        autoComplete="username"
                        className={username === '' ? 'is-invalid' : 'is-valid'}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Senha"
                        autoComplete="current-password"
                        className={password === '' ? 'is-invalid' : 'is-valid'}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </CInputGroup>
                    {errorState.error && <span style={{ color: 'red' }}>{errorState.message}</span>}
                    <CRow>
                      <CCol xs={6}>
                        <CButton
                          disabled={loading}
                          color="primary"
                          className="px-4"
                          onClick={() => handleLogin()}
                        >
                          {loading && <CSpinner component="span" size="sm" aria-hidden="true" />}
                          {loading ? 'Aguarde...' : 'Entrar'}
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
