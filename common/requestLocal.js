const personalizedData = require('../mockData/personalized')
const bannerData = require('../mockData/banner')
const topAlbumData = require('../mockData/top_album')

const data = {
  personalized: personalizedData,
  banner: bannerData,
  topAlbum: topAlbumData,
}

const requestData = ({ res, limit, dataName, propName }) => {
  console.log('propName', propName)
  let result = data[dataName]
  console.log('result', result)
  if (limit) {
    result = data[dataName].splice(0, limit || 30)
  }

  const res1 = res || {
    hasTaste: false,
    code: 200,
    category: 0,
    [propName || `result`]: result,
  }
  return new Promise((resolve, reject) => {
    resolve({ status: 200, body: res1 })
  })
}

module.exports = requestData
