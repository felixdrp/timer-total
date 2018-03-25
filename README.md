# timer-total
Timer full of options:
  * delay
  * interval
  * duration
  * callback

You can clear/cancel de timer at any moment!!

## Install
```
npm install felixdrp/timer-total --save
```
## Use

```javascript
const timer = require('timer-total')

let i = 0
const options = {
  delay: 100,
  interval: 100,
  callback: () => console.log(`Hello World!!! ${++i}`),
  duration: 1e3
}

// delay 100, interval 100 and duration 1000 then callback is called 9 times.
const t = timer(options)

// Result Hello World 9 times.
```

Cancel the timer when you want:

```javascript
const timer = require('timer-total')
const {promisify} = require('util')
const setTimerPromise = promisify(setTimeout)

let i = 0
const options = {
  delay: 100,
  interval: 100,
  callback: () => console.log(`Hello World!!! ${++i}`),
  duration: 1e3
}

// delay 100, interval 100 and duration 1000 then it is cancel at 120 so the callback is called 1 time.
const t = timer(options)

// To clear the timer just call t()
setTimerPromise(120).then(() => t())

// Result Hello World 1 time.
```
