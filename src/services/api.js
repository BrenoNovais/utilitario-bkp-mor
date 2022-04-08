import axios from "axios"


const api = axios.create({
  baseURL: 'https://bkps-mor.fly.dev/api/v1'
})

export {api}