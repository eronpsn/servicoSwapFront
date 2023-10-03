/* eslint-disable prettier/prettier */
import {React,useEffect,useState} from 'react'
import axios from 'axios'
import { apiRequest } from "../../api/config";
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
  const [tarefasPendnetes, setTarefasPendentes] = useState([]);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    console.log('OK');
    const headers = {
      'x-token': token
  };
    // POST request using axios inside useEffect React hook
   // const article = { name: 'cerulean' };
    axios.get('https://api-servico-swap.onrender.com/api/v1/tarefas', {headers})
        .then((response) => {
        //  console.log(response);
        setTarefasPendentes(response.data);
          return response.data
        }).catch(error => {
         // setState({ errorMessage: error.message });
          console.error('There was an error!', error);
      });;

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);

if (!post) return null;
console.log(post)
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
      <CCard  style={{ minHeight: '10rem' }}>
        <CCardBody>
         <CCardTitle> <CAvatar size="md" src={srcAvatares} /></CCardTitle><CCardText>
            <strong>Postado em:</strong> {item.projeto.data}
          </CCardText>

        </CCardBody>
      </CCard>
    </CCol>

    <CCol sm={{span:5, offset:2}} >
      <CCard  style={{ minHeight: '10rem' }}>
        <CCardBody>
          <CCardTitle>Solicitou:</CCardTitle>
          <CCardText>
          {item.projeto.descricao}
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

export default Pendentes
