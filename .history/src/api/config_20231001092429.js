/* eslint-disable prettier/prettier */
import axios from 'axios'

export const connect = async (value, method, body, token) => {
  if (method === 'post') {
    return await axios
      .post(`https://api-agenda-p8t5.onrender.com/${value}`, body, token)
      .then((result) => {
        return result.data
      })
      .catch((err) => {
        return err
      })
  } else if (method === 'get') {
    return await axios
      .get(`https://api-agenda-p8t5.onrender.com/${value}`, body)
      .then((result) => {
        return result.data
      })
      .catch((err) => {
        return err
      })
  }
}
