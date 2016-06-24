'use strict'

const Service = require('trails-service')
const twilio = require('twilio')
const _ = require('lodash')

/**
 * @module TwilioService
 * @description Twilio service for sending SMS
 */
module.exports = class TwilioService extends Service {
  /**
   * Send SMS to a number
   * @param to number to send message to
   * @param body message to send, can be null
   * @param options additional options (mediaUrl, accountSid, authToken, from...)
   */
  sendSMSTo(to, body, options) {
    const config = _.defaults(this.app.config.twilio, options)
    const client = twilio(config.accountSid, config.authToken)

    const message = {
      to: to,
      from: config.from
    }

    if (body) {
      message.body = body
    }

    if (config.mediaUrl) {
      message.mediaUrl = config.mediaUrl
    }
    return new Promise((resolve, reject) => {
      client.messages.create(message, (err, response) => {
        if (err) return reject(err)
        return resolve(response)
      })
    })
  }
}

