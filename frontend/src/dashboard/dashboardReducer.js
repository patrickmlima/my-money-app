const INITIAL_STATE = { summary: { credit: 0, debt: 0 }}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'BILLING_SUMMARY_FETCHED':
            const { credit, debt } = action.payload.data;
            const summary = {
                credit: credit || 0,
                debt: debt || 0
            }
            return { ...state, summary }
        default:
            return state;
    }
}