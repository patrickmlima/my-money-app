import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from 'redux-form'
import { selectTab, showTabs } from '../common/tab/tabActions'

const BASE_URL = "http://localhost:3003/api"

export function getList() {
    const req = axios.get(`${BASE_URL}/billing-cycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: req
    }
}

export function create(values) {
    return dispatch => {
        axios.post(`${BASE_URL}/billing-cycles`, values)
        .then(() => {
            toastr.success("Sucesso", "Ciclo de pagamento salvo")
            dispatch([
                resetForm("billingCycleForm"),
                getList(),
                selectTab('tabList'),
                showTabs('tabList', 'tabCreate')
            ])
        })
        .catch(err => err.response.data.errors.forEach(e => toastr.error("Erro", e)))
    }
}