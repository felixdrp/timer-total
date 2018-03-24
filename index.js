// interval default = 1 second = 1000 ms = 1e3 ms
// the duration is infinity by default

function timer({
  delay = 0,
  interval = 1e3,
  callback = () => {},
  duration = false
}) {
  let timers = []
  let clearTimers = () => timers.forEach(i => clearTimeout(i))
  
  timers.push(
    setTimeout(() => {
      callback()
      if (interval <= 0) {
	return
      }
      timers.push(setInterval(() => callback(), interval))
    }, delay))
    
  if (duration) {
    timers.push(
      setTimeout(clearTimers, duration))
  }
  // Return a function to clear all the timers.
  return clearTimers
}

module.exports = timer
