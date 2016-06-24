# trailpack-twilio

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

Twilio Trailpack for sending SMS

## Install
With yo : 
```sh
$ yo trails:trailpack trailpack-twilio
```

With npm
```sh
$ npm install --save trailpack-twilio
```

## Configure

Add you trailpack to Trails :
```js
// config/main.js
module.exports = {
  packs: [
    // ... other trailpacks
    require('trailpack-twilio')
  ]
}
```

Add configuration for twilio : 
```js
// config/twilio.js
module.exports = {
  /**
   * The "account sid" associated with your Twilio account.
   */
  accountSid: null,
  /**
   * The "auth token" associated with your Twilio account.
   */
  authToken: null,
  /**
   * This is the 'From' phone number you'd like to use to send the SMS.
   */
  from: null
}
```

## Usage
Use the `TwilioService` like this (from controllers/policies/services) : 
```js
//Send basic SMS
this.app.services.TwilioService.sendSMSTo('toNumber', 'message to send').then(response => {
         this.app.log.debug('ok')
       }).catch(err => {
         this.app.log.error(err)
       })
       
//Send basic SMS with media URL
this.app.services.TwilioService.sendSMSTo('toNumber', 'message to send', {mediaUrl: 'http://myurl.fr'}).then(response => {
         this.app.log.debug('ok')
       }).catch(err => {
         this.app.log.error(err)
       })

```

## Contributing
We love contributions! Please check out our [Contributor's Guide](https://github.com/trailsjs/trails/blob/master/.github/CONTRIBUTING.md) for more
information on how our projects are organized and how to get started.

## License
[MIT](https://github.com/jaumard/trailpack-twilio/blob/master/LICENSE)

[npm-image]: https://img.shields.io/npm/v/trailpack-twilio.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trailpack-twilio
[ci-image]: https://img.shields.io/travis/jaumard/trailpack-twilio/master.svg?style=flat-square
[ci-url]: https://travis-ci.org/jaumard/trailpack-twilio
[daviddm-image]: http://img.shields.io/david/jaumard/trailpack-twilio.svg?style=flat-square
[daviddm-url]: https://david-dm.org/jaumard/trailpack-twilio
[codeclimate-image]: https://img.shields.io/codeclimate/github/jaumard/trailpack-twilio.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/jaumard/trailpack-twilio

