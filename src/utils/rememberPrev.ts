/***
  A function that recives a callback, which recieves two parameters,
  a previous value and a current value, then returns another function that calls the callback and
  sets the previous value to the return of the last execution of the callback.
*/
export default function rememberPrev<T>(callback: (prev: T, curr: T) => T) {
  let prev: T = null

  return (value: T) => {
    prev = callback(prev, value)
  }
}
