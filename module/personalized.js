// 推荐歌单

const personalizedData = require('./../mockData/personalized.js')
const requestLocal = require('../common/requestLocal')
// console.log(personalizedData)
module.exports = (query, request) => {
  console.log('personalized....')
  const data = {
    limit: query.limit || 30,
    // offset: query.offset || 0,
    total: true,
    n: 1000,
  }
  // return request(
  //   'POST',
  //   `https://music.163.com/weapi/personalized/playlist`,
  //   data,
  //   {
  //     crypto: 'weapi',
  //     cookie: query.cookie,
  //     proxy: query.proxy,
  //     realIP: query.realIP,
  //   },
  // )

  return requestLocal({
    dataName: 'personalized',
    limit: query.limit,
    propName: 'result',
  })
}
