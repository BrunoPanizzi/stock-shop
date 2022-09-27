import { createStore } from 'solid-js/store'

import { stock } from '../types/stock'

export const [stocks, setStocks] = createStore<stock[]>([
  { ticker: 'ITSA3', amount: 0, weight: 1 },
  { ticker: 'B3SA3', amount: 0, weight: 1 },
  { ticker: 'WEGE3', amount: 0, weight: 1 },
  { ticker: 'ARZZ3', amount: 0, weight: 1 },
  { ticker: 'MYPK3', amount: 0, weight: 1 },
  { ticker: 'MDIA3', amount: 0, weight: 1 },
])

export const addStock = (stock: stock) => {
  if (stocks.find((s) => s.ticker === stock.ticker)) {
    return
  }
  setStocks((s) => [...s, stock])
}

export const changeAmount = (ticker: string, amount: number) => {
  setStocks((s) => s.ticker === ticker, 'amount', amount)
}
