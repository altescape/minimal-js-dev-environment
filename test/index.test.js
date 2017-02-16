const test = require('ava')
const meaningOfLife = require('../lib/meaningOfLife')
const multiply = require('../lib/multiply')

test('Can get correct value from combining modules', (t) => {
  t.is(multiply(meaningOfLife()), 84)
})
