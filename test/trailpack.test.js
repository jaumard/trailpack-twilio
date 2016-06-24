'use strict'

const assert = require('assert')

describe('Trailpack', () => {
  let pack
  before(() => {
    pack = global.app.packs.twilio
  })
  it('should be loaded into the app.packs collection', () => {
    assert(pack)
  })
})
