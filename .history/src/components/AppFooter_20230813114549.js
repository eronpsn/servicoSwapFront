import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span className="ms-1">
          &copy; Trabalho desenvolvido para o curso de desenvolvimento Web Full stack
        </span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by Jaime Santos</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
