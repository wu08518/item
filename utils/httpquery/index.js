import http from './http'

const httpquery = {
  async post (url, param) {
    try {
      const res = await http.post(url, param)
      const data = res.data
      // 响应码 00000 99999 111111
      const trancode = data.REP_HEAD.TRAN_CODE
      // 响应描述
      const tranmsg = data.REP_HEAD.TRAN_RSPMSG
      // 响应体
      const tranbody = data.REP_BODY
      console.log('请求响应结果:', data)
      if (trancode === '000000') {
        console.info('请求结果:', tranbody)
        return {
          code: '1',
          responseInfo: tranbody
        }
      } else if (trancode === '999999') {
        console.error('请求异常:', tranmsg)
        return {
          code: '0',
          responseInfo: tranmsg
        }
      } else {
        console.info('请求失败', tranmsg)
        return {
          code: '-1',
          responseInfo: tranmsg
        }
      }
    } catch (e) {
      console.error('请求错误', e)
      return {
        code: '-1'
      }
    }
  }
}

httpquery.interceptors = http.interceptors

export default httpquery
