import axios from 'axios'

const BASE_URL = "http://localhost:3003/api"

export function getList() {
    const req = axios.get(`${BASE_URL}/billing-cycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: req
    }
}

export function create(values) {
    const req = axios.post(`${BASE_URL}/billing-cycles`, values)
    return {
        type: 'BILLING_CYCLE_CREATED',
        payload: req
    }
}