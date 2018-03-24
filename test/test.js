const tap = require('tap');
const {promisify} = require('util');
const setTimerPromise = promisify(setTimeout)
const timer = require('../index.js');
tap.jobs = 6
const optionsDefault = {
  delay:10,
  interval: 10,
  duration: 1e2
}

tap.test('delay 0, interval 0 and duration 100 then callback is called 1 time.', assert => {
  let testArray = []
  const options = {
    ...optionsDefault,
    callback: () => testArray.push('test'),
    delay: 0,
    interval: 0,
  }

  let t = timer(options)
  setTimerPromise(120).then(()=> {
    assert.equal(testArray.length, 1);
    assert.end();
  })
});


tap.test('delay 10, interval 10 and duration 100 then callback is called 9 times', assert => {
  let testArray = []
  const options = {
    ...optionsDefault,
    callback: () => testArray.push('test'),
  }

  let t = timer(options)
  setTimerPromise(120).then(()=> {
    assert.equal(testArray.length, 9);
    assert.end();
  })
});

tap.test('delay 0, interval 10 and duration 100 then callback is called 10 times(simple)', assert => {
  let testArray = []
  const options = {
    ...optionsDefault,
    callback: () => testArray.push('test'),
    delay: 0,
  }

  let t = timer(options)
  setTimerPromise(120).then(()=> {
    assert.equal(testArray.length, 10);
    assert.end();
  })
});

tap.test('delay 0, interval 10 and duration 100 then callback is called 10 times', assert => {
  function* counter(total) {
    for (let i = 0; i < total; i++) {
      yield i
    }
  }
  let testArray = []
  let arrayToCompare = []
  let count = counter(10)
  let count2 = counter(10)

  const options = {
    ...optionsDefault,
    callback: () => testArray.push(count.next().value),
    delay: 0,
  }

  for (let i of count2) {
    arrayToCompare.push(i)
  }

  let t = timer(options)
  setTimerPromise(120).then(()=> {
    assert.strictSame(testArray, arrayToCompare);
    assert.end();
  })
});

tap.test('delay 10, interval 10 and duration 100 then stoped at 5 callback is not called.', assert => {
  let testArray = []
  const options = {
    ...optionsDefault,
    callback: () => testArray.push('test'),
  }

  let t = timer(options)

  setTimerPromise(5).then(t)
  
  setTimerPromise(120).then(()=> {
    assert.equal(testArray.length, 0);
    assert.end();
  })
});

tap.test('delay 10, interval 10 and duration 100 then stoped at 15 callback is called 1 time.', assert => {
  let testArray = []
  const options = {
    ...optionsDefault,
    callback: () => testArray.push('test'),
  }

  let t = timer(options)

  setTimerPromise(15).then(t)

  setTimerPromise(120).then(()=> {
    assert.equal(testArray.length, 1);
    assert.end();
  })
});
