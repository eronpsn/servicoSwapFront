/* eslint-disable prettier/prettier */
import axios from 'axios'

export const request = async (rota, method, body, headers) => {
  if (method === 'post') {
    return await axios
      .post(`https://api-agenda-p8t5.onrender.com/${rota}`, body, headers)
      .then((result) => {
        return result.data
      })
      .catch((err) => {
        return err
      })
  } else if (method === 'get') {
    return await axios
      .get(`https://api-agenda-p8t5.onrender.com/${rota}`, body)
      .then((result) => {
        return result.data
      })
      .catch((err) => {
        return err
      })
  }
}
