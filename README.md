# timer-total

It has no dependencies!!

Timer full of options:
  * delay
  * interval
  * duration
  * callback

You can clear/cancel the timer at any moment!! 

## Install
```
npm install felixdrp/timer-total --save
```
## Usage

Import the module and call "timer" in your code. The function will print "Hello World!" with a delay of 100ms at 100ms intervals, which sums a duration of 1000ms. This means that the callback will be called 9 times.

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

In addition, you can cancel the timer anytime. If you want to do so just call the return function "t()". In this example, we call it with a timeout to stop the process at 120ms.

```javascript
const timer = require('timer-total')

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
setTimeout(() => t(), 120)

// Result Hello World 1 time.
```

Here is another example but using promeses:

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

Happy Coding! :D
