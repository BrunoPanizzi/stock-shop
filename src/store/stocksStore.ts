import { createStore } from 'solid-js/store'
import { track } from '../services/liveStocksService'

import { stockWithPrice } from '../types/stock'

export interface superStock extends stockWithPrice {
  // for the websocket connection, just to make sure
  fetched: boolean
}

export const [stocks, setStocks] = createStore<superStock[]>([])

export const addStock = (ticker: string) => {
  if (stocks.find((s) => s.ticker === ticker)) {
    return
  }
  track(ticker, (res) => {
    setPrice(ticker, res.price)
    setStocks((s) => s.ticker === ticker, 'fetched', true)
  })
  setStocks((s) => [
    ...s,
    {
      ticker,
      amount: 0,
      weight: 1,
      price: null,
      get value() {
        return this.amount * this.price
      },
      fetched: false,
    },
  ])
}

export const changeAmount = (ticker: string, amount: number) => {
  setStocks((s) => s.ticker === ticker, 'amount', amount)
}

export const setPrice = (ticker: string, price: number) => {
  setStocks((s) => s.ticker === ticker, 'price', price)
}
