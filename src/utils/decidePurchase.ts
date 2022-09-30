import { stockWithPrice } from '../types/stock'

export default function decidePurchase(
  stocksPosition: stockWithPrice[],
  moneyToInvest: number
) {
  let stocks = cloneStocks(stocksPosition)
  let totalMoney = moneyToInvest

  const smallestValue = stocks.reduce((prev, curr) =>
    prev.value < curr.value ? prev : curr
  ).price

  let purchases: string[] = []

  while (totalMoney > smallestValue) {
    stocks = stocks.sort((a, b) => (a.value > b.value ? 1 : -1))
    totalMoney -= stocks[0].price
    stocks[0].amount++

    purchases.push(stocks[0].ticker)
  }

  const count: Record<string, number> = {}

  purchases.forEach((stock) => {
    count[stock] = (count[stock] || 0) + 1
  })
  return count
}

function cloneStocks(stocks: stockWithPrice[]): stockWithPrice[] {
  return stocks
    .map(
      (s) =>
        s.price && {
          ...s,
          get value() {
            return this.price * this.amount
          },
        }
    )
    .filter((s) => !!s)
}
