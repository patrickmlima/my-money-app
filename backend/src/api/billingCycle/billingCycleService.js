const BillingCycle = require('./billingCycle');
const errorHandler = require('../common/errorHandler');

BillingCycle.methods(['get', 'post', 'put', 'delete']);
BillingCycle.updateOptions({ new: true, runValidators: true });
BillingCycle.after('post', errorHandler).after('put', errorHandler);

BillingCycle.route('count', ['get'], (req, res, next) => {
  BillingCycle.countDocuments({}, (err, value) => {
    if(err) {
      res.status(500).json({ errors: [err] });
    } else {
      res.status(200).json({ value });
    }
  })
})

BillingCycle.route('summary', ['get'], (req, res, next) => {
  BillingCycle.aggregate([
    {
      $project: {
        credit: { $sum: "$credits.value" },
        debt: { $sum: "$debts.value" }
      }
    },
    {
      $group: {
        _id: null,
        creadit: { $sum: "$credit" },
        debt: { $sum: "$debt" }
      }
    },
    {
      $project: { _id: 0, credit: 1, debt: 1 }
    }
  ],
  (err, result) => {
    if(err) {
      res.status(500).json({ errors: [err] })
    } else {
      res.status(200).json(result[0] || { credit: 0, debt: 0 })
    }
  })
})

module.exports = BillingCycle;
