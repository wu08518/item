import axios from 'axios'
import Qs from 'qs'
import encrypt from './encrypt'

const http = axios.create({
  // method: 'post',
  baseURL: 'http://139.219.185.33:8090/TBIMPSWEB',
  transformRequest: [
    data => {
      console.log('请求的参数', data)
      data = encrypt(data)
      data = {
        REQ_MESSAGE: data
      }
      data = Qs.stringify(data)
      return data
    }
  ],
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  timeout: 30000
})

export default http