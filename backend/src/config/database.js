const mongoose = require('mongoose')

mongoose.Promise = global.Promise

// defining messages
mongoose.Error.messages.general.required = "The attribute '{PATH}' is required."
mongoose.Error.messages.Number.min = "Value '{VALUE}' is lesser than the minimal value required of '{MIN}'."
mongoose.Error.messages.Number.max = "Value '{VALUE}' is greater than the max value required of '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' is not valid to attribute '{PATH}'."

module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true })
