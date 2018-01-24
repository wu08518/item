// import CryptoJS from 'crypto-js'
import MD5 from 'md5'

// md5加密
function encrypt (data) {
  let pwd = '1111111111111111' // 密钥
  let array = []
  for (let key in data) {
    array.push(key)
  }
  array.sort()
  let sortJson = {}
  for (let a in array) {
    sortJson[array[a]] = data[array[a]]
  }
  let bodyStr = JSON.stringify(sortJson) + pwd
  let dataJson = {}
  dataJson.REQ_HEAD = {
    // chnId: '00',
    chnId: '03',
    verId: '1.0'
  }
  dataJson.REQ_HEAD.SIGN = MD5(bodyStr) // Md5加密
  dataJson.REQ_BODY = sortJson
  let request = JSON.stringify(dataJson)
  return request
}

export default encrypt
