import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { selectTab, showTabs } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api';
const INITIAL_VALUES = {
    credits: [{}],
    debts: [{}]
};

export function getList() {
    const req = axios.get(`${BASE_URL}/billing-cycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: req
    }
}

export function create(values) {
    return submit(values, 'post');
}

export function update(values) {
    return submit(values, 'put');
}

export function remove(values) {
    return submit(values, 'delete');
}

function submit(values, method) {
    if(method === 'delete' && 
    !window.confirm('Deseja mesmo remover essa entrada?')) {
        return dispatch => {};
    }
    return dispatch => {
        const id = values._id || '';
        axios.request({
            method: method,
            url: `${BASE_URL}/billing-cycles/${id}`,
            data: values
        }).then(() => {
            toastr.success('Sucesso', 'Operação realizada com sucesso.');
            dispatch(init());
        }).catch(err => err.response.data.errors.forEach(e => toastr.error('Erro', e)));
    }
}

export function showUpdate(billingCycle) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ];
}

export function showDelete(billingCycle) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ];
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ];
}
