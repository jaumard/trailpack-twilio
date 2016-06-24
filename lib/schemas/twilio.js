const joi = require('joi')

module.exports = joi.object().keys({
  accountSid: joi.string().required(),
  authToken: joi.string().required(),
  from: joi.string().required()

})
