// 首页轮播图
const requestLocal = require('../common/requestLocal')

module.exports = (query, request) => {
  console.log('bannerrrrrr')
  const type =
    {
      0: 'pc',
      1: 'android',
      2: 'iphone',
      3: 'ipad',
    }[query.type || 0] || 'pc'
  return request(
    'POST',
    `https://music.163.com/api/v2/banner/get`,
    { clientType: type },
    { crypto: 'api', proxy: query.proxy, realIP: query.realIP },
  )

  // return requestLocal({ dataName: 'banner', propName: 'banners' })
}
