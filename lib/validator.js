const joi = require('joi')

const schemas = require('./schemas')

module.exports = {
  validateConfig (config) {
    if (!config) {
      return Promise.reject(new TypeError('config.twilio not found'))
    }
    return new Promise((resolve, reject) => {
      joi.validate(config, schemas.twilio, (err, value) => {
        if (err) return reject(new TypeError('config.twilio: ' + err))

        return resolve(value)
      })
    })
  }
}
