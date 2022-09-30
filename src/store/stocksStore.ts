import { createStore } from 'solid-js/store'

import { stockWithPrice } from '../types/stock'

export const [stocks, setStocks] = createStore<stockWithPrice[]>([
  {
    ticker: 'ITSA3',
    amount: 0,
    weight: 1,
    price: null,
    get value() {
      return this.amount * this.price
    },
  },
  {
    ticker: 'B3SA3',
    amount: 0,
    weight: 1,
    price: null,
    get value() {
      return this.amount * this.price
    },
  },
  {
    ticker: 'WEGE3',
    amount: 0,
    weight: 1,
    price: null,
    get value() {
      return this.amount * this.price
    },
  },
  {
    ticker: 'ARZZ3',
    amount: 5,
    weight: 1,
    price: null,
    get value() {
      return this.amount * this.price
    },
  },
  {
    ticker: 'MYPK3',
    amount: 0,
    weight: 1,
    price: null,
    get value() {
      return this.amount * this.price
    },
  },
  {
    ticker: 'MDIA3',
    amount: 0,
    weight: 1,
    price: null,
    get value() {
      return this.amount * this.price
    },
  },
])

export const addStock = (stock: stockWithPrice) => {
  if (stocks.find((s) => s.ticker === stock.ticker)) {
    return
  }
  setStocks((s) => [...s, stock])
}

export const changeAmount = (ticker: string, amount: number) => {
  setStocks((s) => s.ticker === ticker, 'amount', amount)
}

export const setPrice = (ticker: string, price: number) => {
  setStocks((s) => s.ticker === ticker, 'price', price)
}
