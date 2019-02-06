const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })

BillingCycle.route('count', ['get'], (req, res, next) => {
  BillingCycle.countDocuments({}, (err, value) => {
    if(err) {
      res.status(500).json({ errors: [err] })
    } else {
      res.status(200).json({ value })
    }
  })
})

module.exports = BillingCycle
