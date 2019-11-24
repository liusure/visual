import axios from 'axios'
// ENV
const ENV = process.env.NODE_ENV;//development or production

export function request(params) {
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
  listColumn: {
    url: "/ec/template/ajax/listColumn"
  },
  getColumn: {
    url: "/ec/template/ajax/getColumn"
  }
}, "http://localhost:8081/cms")

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

export {api};