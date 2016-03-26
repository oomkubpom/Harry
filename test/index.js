/* global describe, before, beforeEach, afterEach,it */
require('mocha-generators').install()

var Nightmare = require('..')
var oom = require('oom')
var server = require('./server')
var should = oom.should()
var ken = function () {
  ken()
  if (should) {
  }
}
describe('TEST Buy Harry Potter', function () {
  before(function (done) {
    server.listen(7500, done)
  })

  describe('Test buy Harry Potter', function () {
    var nightmare

    beforeEach(function () {
      nightmare = Nightmare()
    })

    afterEach(function * () {
      yield nightmare.end()
    })
    it('ซื้อเล่ม 1 จำนวน 2 เล่ม ส่วนลดต้องเท่ากับ 0', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:6000')
        .wait(2000)
        .click('.bookNo1')
        .click('.bookNo1')
        .evaluate(function () {
          this.price = document.querySelector('.total2').innerHTML
          return this.price.substr(1, this.price.length - 1)
        })
      case1.should.equal('0.00')
    })
    it('ซื้อเล่ม 1 จำนวน 2 เล่ม, ซื้อเล่ม 2 จำนวน 1 เล่ม ส่วนลดต้องเท่ากับ 20', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(2000)
        .click('.bookNo1')
        .click('.bookNo1')
        .wait(1000)
        .click('.bookNo2')
        .evaluate(function () {
          this.price = document.querySelector('.total2').innerHTML
          return this.price.substr(1, this.price.length - 1)
        })
      case1.should.equal('20.00')
    })
    it('ซื้อเล่ม 1 จำนวน 2 เล่ม, ซื้อเล่ม 2 จำนวน 2 เล่ม ส่วนลดต้องเท่ากับ 20', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(2000)
        .click('.bookNo1')
        .click('.bookNo1')
        .wait(1000)
        .click('.bookNo2')
        .click('.bookNo2')
        .evaluate(function () {
          this.price = document.querySelector('.total2').innerHTML
          return this.price.substr(1, this.price.length - 1)
        })
      case1.should.equal('40.00')
    })
    it('ซื้อเล่ม 3 จำนวน 3 เล่ม, ซื้อเล่ม 4 จำนวน 3 เล่ม ส่วนลดต้องเท่ากับ 60', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(2000)
        .click('.bookNo3')
        .click('.bookNo3')
        .click('.bookNo3')
        .wait(1000)
        .click('.bookNo4')
        .click('.bookNo4')
        .click('.bookNo4')
        .evaluate(function () {
          this.price = document.querySelector('.total2').innerHTML
          return this.price.substr(1, this.price.length - 1)
        })
      case1.should.equal('60.00')
    })
    it('ซื้อเล่ม 1 จำนวน 1 เล่ม, ซื้อเล่ม 2 จำนวน 1 เล่ม, ซื้อเล่ม 4 จำนวน 1 เล่ม ส่วนลดต้องเท่ากับ 60', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(2000)
        .click('.bookNo1')
        .click('.bookNo2')
        .click('.bookNo4')
        .wait(1000)
        .evaluate(function () {
          this.price = document.querySelector('.total2').innerHTML
          return this.price.substr(1, this.price.length - 1)
        })
      case1.should.equal('60.00')
    })
    it('ซื้อเล่ม 1 จำนวน 10 เล่ม ส่วนลดต้องเท่ากับ 0', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(2000)
        .click('.bookNo1')
        .click('.bookNo1')
        .click('.bookNo1')
        .click('.bookNo1')
        .click('.bookNo1')
        .click('.bookNo1')
        .click('.bookNo1')
        .click('.bookNo1')
        .click('.bookNo1')
        .click('.bookNo1')
        .wait(1000)
        .evaluate(function () {
          this.price = document.querySelector('.total2').innerHTML
          return this.price.substr(1, this.price.length - 1)
        })
      case1.should.equal('0.00')
    })
    it('ซื้อเล่ม 1-3 ภาคละ 1 เล่ม ส่วนลดต้องเท่ากับ 60', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(2000)
        .click('.bookNo1')
        .click('.bookNo2')
        .click('.bookNo3')
        .wait(1000)
        .evaluate(function () {
          this.price = document.querySelector('.total2').innerHTML
          return this.price.substr(1, this.price.length - 1)
        })
      case1.should.equal('60.00')
    })
    it('ซื้อเล่ม 1-4 ภาคละ 1 เล่ม ส่วนลดต้องเท่ากับ 120', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(2000)
        .click('.bookNo1')
        .click('.bookNo2')
        .click('.bookNo3')
        .click('.bookNo4')
        .wait(1000)
        .evaluate(function () {
          this.price = document.querySelector('.total2').innerHTML
          return this.price.substr(1, this.price.length - 1)
        })
      case1.should.equal('120.00')
    })
    it('ซื้อเล่ม 1-5 ภาคละ 1 เล่ม ส่วนลดต้องเท่ากับ 200', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(2000)
        .click('.bookNo1')
        .click('.bookNo2')
        .click('.bookNo3')
        .click('.bookNo4')
        .click('.bookNo5')
        .wait(1000)
        .evaluate(function () {
          this.price = document.querySelector('.total2').innerHTML
          return this.price.substr(1, this.price.length - 1)
        })
      case1.should.equal('200.00')
    })
    it('ซื้อเล่ม 1-6 ภาคละ 1 เล่ม ส่วนลดต้องเท่ากับ 300', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(2000)
        .click('.bookNo1')
        .click('.bookNo2')
        .click('.bookNo3')
        .click('.bookNo4')
        .click('.bookNo5')
        .click('.bookNo6')
        .wait(1000)
        .evaluate(function () {
          this.price = document.querySelector('.total2').innerHTML
          return this.price.substr(1, this.price.length - 1)
        })
      case1.should.equal('300.00')
    })
    it('ซื้อทุกเล่ม ภาคละ 1 เล่ม ส่วนลดต้องเท่ากับ 420', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(2000)
        .click('.bookNo1')
        .click('.bookNo2')
        .click('.bookNo3')
        .click('.bookNo4')
        .click('.bookNo5')
        .click('.bookNo6')
        .click('.bookNo7')
        .wait(1000)
        .evaluate(function () {
          this.price = document.querySelector('.total2').innerHTML
          return this.price.substr(1, this.price.length - 1)
        })
      case1.should.equal('420.00')
    })
    it('ซื้อเล่ม 1 จำนวน 6 เล่ม, ซื้อเล่ม 2 จำนวน 5 เล่ม, ซื้อเล่ม 3 จำนวน 4 เล่ม, ซื้อเล่ม 4 จำนวน 1 เล่ม ส่วนลดต้องเท่ากับ 320', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(2000)
        .click('.bookNo1')
        .click('.bookNo1')
        .click('.bookNo1')
        .click('.bookNo1')
        .click('.bookNo1')
        .click('.bookNo1')
        .click('.bookNo2')
        .click('.bookNo2')
        .click('.bookNo2')
        .click('.bookNo2')
        .click('.bookNo2')
        .click('.bookNo3')
        .click('.bookNo3')
        .click('.bookNo3')
        .click('.bookNo3')
        .click('.bookNo4')
        .wait(1000)
        .evaluate(function () {
          this.price = document.querySelector('.total2').innerHTML
          return this.price.substr(1, this.price.length - 1)
        })
      case1.should.equal('320.00')
    })
  })
})
