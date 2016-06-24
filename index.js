'use strict'

const Trailpack = require('trailpack')
const lib = require('./lib')

module.exports = class TwilioTrailpack extends Trailpack {

  /**
   * Validate twilio config
   */
  validate () {
    return Promise.all([
      lib.Validator.validateConfig(this.app.config.twilio)
    ])
  }

  constructor (app) {
    super(app, {
      config: require('./config'),
      api: require('./api'),
      pkg: require('./package')
    })
  }
}

