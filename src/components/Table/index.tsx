import {
  Component,
  ParentComponent,
  For,
  createSignal,
  createEffect,
} from 'solid-js'

import roundTo from '../../utils/roundTo'

import { stock } from '../../types/stock'

import { stocks } from '../../mocks/stocksMock'

const HeaderLabel: ParentComponent = ({ children }) => (
  <th class="text-lg font-bold mb-2">{children}</th>
)

interface rowProps extends stock {
  setAmount: (amount: number) => void
}
const StockRow: Component<rowProps> = ({
  ticker,
  amount,
  setAmount,
  price,
  weight,
}) => {
  const handleAmountChange = (e: InputEvent) => {
    setAmount(e.currentTarget.value)
  }

  return (
    <tr>
      <td>{ticker}</td>
      <td>
        <input
          class="bg-transparent"
          type="number"
          value={amount}
          onInput={handleAmountChange}
        />
      </td>
      <td>{price}</td>
      <td>{weight}</td>
      <td>{roundTo(amount * price, 2)}</td>
    </tr>
  )
}

const Table: Component = () => {
  const [stocksSignal, setStocksSignal] = createSignal(stocks)

  createEffect(() => {
    console.log('effect', stocksSignal())
  })
  console.log('rendered', stocksSignal)

  return (
    <table class="border w-full bg-white bg-opacity-20">
      <thead class="border-b-2 ">
        <tr>
          <HeaderLabel>Ticker</HeaderLabel>
          <HeaderLabel>Amount</HeaderLabel>
          <HeaderLabel>Price</HeaderLabel>
          <HeaderLabel>Weight</HeaderLabel>
          <HeaderLabel>Value</HeaderLabel>
        </tr>
      </thead>
      <tbody>
        <For each={stocksSignal()}>
          {(stock) => (
            <StockRow
              {...stock}
              setAmount={(amount: number) => {
                setStocksSignal((prev) =>
                  prev.map((s) =>
                    s.ticker === stock.ticker ? { ...s, amount } : s
                  )
                )
              }}
            />
          )}
        </For>
      </tbody>
    </table>
  )
}

export default Table
