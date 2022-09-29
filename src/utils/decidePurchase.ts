import { stockWithPrice } from '../types/stock'

export default function decidePurchase(
  stocksPosition: stockWithPrice[],
  moneyToInvest: number
) {
  let stocks = stocksPosition.map((s) => ({
    ...s,
    get value() {
      return this.price * this.amount
    },
  }))
  let totalMoney = moneyToInvest
  const smallestValue = stocks.reduce((prev, curr) =>
    prev.value < curr.value ? prev : curr
  ).price

  let purchases = []

  do {
    stocks = stocks.sort((a, b) => (a.value > b.value ? 1 : -1))
    totalMoney -= stocks[0].price
    stocks[0].amount = stocks[0].amount + 1

    purchases.push(stocks[0].ticker)
  } while (totalMoney > smallestValue)

  const count = {}

  purchases.forEach((stock) => {
    count[stock] = (count[stock] || 0) + 1
  })
  return count
}
