import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getList, showUpdate, showDelete, init } from './billingCycleActions'

class BillingCycleList extends Component {

    componentWillMount() {
        this.props.getList();
        this.props.init();
    }

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th>A&ccedil;&otilde;es</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(bc)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                    <button className='btn btn-danger' onClick={() => this.props.showDelete(bc)}>
                        <i className='fa fa-trash'></i>
                    </button>
                </td>
            </tr>
        ))
    }
}

const mapStateToProps = (state) => ({ list: state.billingCycle.list })
const mapDispatchToProps = dispatch => bindActionCreators({
    getList, showUpdate, showDelete, init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)