import axios from "axios"

const api = axios.create({
 // baseURL: 'http://127.0.0.1:3333/api/v1'
 baseURL:'https://bkps-mor.fly.dev/api/v1'
})

export default api