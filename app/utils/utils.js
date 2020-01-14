import axios from 'axios'
import {mediaUrl} from '@/constants'
// ENV
const ENV = process.env.NODE_ENV;//development or production

function request(params) {
  return axios({...params}).then((res) => {
    if (res.status === 200) {
      return res.data;
    }
  })
}

let api = disposeUrl({
  template: {
    url: "/ec/template/ajax/getTemplate"
  },
  saveTemplate: {
    url: "/ec/template/ajax/update_v"
  },
  uploadFile: {
    url: "/ec/template/ajax/uploadFile"
  },
  listGoods: {
    url: "/ec/template/ajax/listGoods"
  },
  listArticle: {
    url: "/ec/template/ajax/listArticle"
  },
  listColumn: {
    url: "/ec/template/ajax/listColumn"
  },
  getColumn: {
    url: "/ec/template/ajax/getColumn"
  }
}, "https://manage.tenfenbook.com/cms")//https://cs.tenfenbook.com/cms

function disposeUrl(obj, prefix) {
  Object.keys(obj).forEach(v => {
    if (obj[v].url) {
      obj[v] = prefix + obj[v].url;
    } else {
      obj[v] = disposeUrl(obj[v], prefix);
    }
  });

  return obj;
}

function mediaUrlFormat(url) {
  if (url == null) {
    return null
  }
  if (url.indexOf("http") == -1) {
    return mediaUrl + url;
  } else {
    return url;
  }
}

export {request, api, mediaUrlFormat};