/* eslint-disable prettier/prettier */
import axios from 'axios'

export const apiRequest = async (rota, method, body, headers) => {
  if (method === 'POST') {
    return await axios
      .post(`https://api-servico-swap.onrender.com/api/v1/${rota}`, body, {headers})
      .then((result) => {
        return result.data
      })
      .catch((err) => {
        return err
      })
  } else if (method === 'GET') {
    return await axios
      .get(`https://api-servico-swap.onrender.com/api/v1/${rota}`, {headers})
      .then((result) => {
        return result.data
      })
      .catch((err) => {
        return err
      })
  }
  else if (method === 'PUT') {
    return await axios
      .put(`https://api-servico-swap.onrender.com/api/v1/${rota}`,body, {headers})
      .then((result) => {
        return result.data
      })
      .catch((err) => {
        return err
      })
  }
}
