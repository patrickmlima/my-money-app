import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field, formValueSelector } from 'redux-form';

import { init } from './billingCycleActions';
import labelAndInput from '../common/form/labelAndInput';
import Row from '../common/layout/row';
import ItemList from './itemList';

class BillingCycleForm extends Component {

    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props

        return (
            <form role="form" onSubmit={handleSubmit} >
                <div className="box-body">
                    <Field name="name" component={labelAndInput} readOnly={readOnly}
                    label="Nome" cols="12 4" placeholder="Informe o nome"
                    type="text" />
                    <Field name="month" component={labelAndInput} readOnly={readOnly}
                    label="Mês" cols="12 4" placeholder="Informe o mês"
                    type="number" />
                    <Field name="year" component={labelAndInput} readOnly={readOnly}
                    label="Ano" cols="12 4" placeholder="Informe o ano"
                    type="number" />

                    <Row>
                        <ItemList cols='12 6' readOnly={readOnly} list={credits}
                        field='credits' legend='Créditos'></ItemList>

                        <ItemList cols='12 6' readOnly={readOnly} list={debts}
                        field='debts' legend='Débitos' showStatus={true}></ItemList>
                    </Row>
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type="button" className="btn btn-default"
                    onClick={this.props.init}>Cancel</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({ form: "billingCycleForm", destroyOnUnmount: false })(BillingCycleForm);
const selector = formValueSelector('billingCycleForm');

const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
});
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)