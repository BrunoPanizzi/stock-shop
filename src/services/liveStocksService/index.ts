import protobuf from 'protobufjs'
import { Buffer } from 'buffer'

import proto from './proto'
import { response } from './types'

const ws = new WebSocket('wss://streamer.finance.yahoo.com')

const { root } = protobuf.parse(proto)
const Yaticker = root.lookupType('yaticker')

const listeners = new Map<string, (response: response) => void>()

ws.onopen = () => {
  console.log('conected')
  ws.send(
    JSON.stringify({
      subscribe: listeners.keys(),
    })
  )
}

ws.onclose = () => {
  console.log('closed')
}

ws.onmessage = (message) => {
  console.log('incomming')
  const parsed = Yaticker.decode(Buffer.from(message.data, 'base64')) as unknown
  // weird hack to have a response object because protobuf is weird
  let response = {} as response
  Object.keys(parsed).forEach((key) => {
    response[key] = parsed[key]
  })

  for (let ticker of listeners.keys()) {
    if (response.id === ticker) {
      const callback = listeners.get(ticker)
      callback(response)
    }
  }
}

export function track(ticker: string, callback: (response: response) => void) {
  if (ws.readyState === 1) {
    // 1 means open

    ws.send(
      JSON.stringify({
        subscribe: [ticker],
      })
    )
    listeners.set(ticker, callback)
  }
}
