import axios from 'axios'
import config from '../config/config'

/*axios.defaults.baseURL = config.apiURL

export default axios

export default axios.create({
    baseURL: config.apiURL
})*/



const instance = axios.create({})

instance.defaults.baseURL = config.apiURL
instance.interceptors.request.use(config => {
    console.log('interceptando: ', config);
    config.data = {
        ...config.data,
        curso: 'Vue JS'
    }

    config.headers.common['Authorization'] = `Bearer token_jwt`
    //config.headers.put['Meu-cabecalho'] = 'Curso Vue JS'
    return config
   /* return new Promise((resolve) => {
        console.log('Fazendo requisição: ');
        setTimeout(() => {
            console.log('Enviando: ');
            resolve(config)
        }, 2000)
    })
})*/ 
}, error => {
    console.log('Erro ao fazer requisição: ');
    return Promise.reject(error);
})

export default instance
