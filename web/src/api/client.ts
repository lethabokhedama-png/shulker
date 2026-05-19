import axios from 'axios'
import { API_BASE } from '@/lib/constants'

const client = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' },
})

export default client
