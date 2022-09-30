import { Component, Show } from 'solid-js'

import { changeAmount, superStock } from '../../store/stocksStore'

interface rowProps {
  stock: superStock
}

export const StockRow: Component<rowProps> = ({ stock }) => {
  return (
    <tr>
      <td>{stock.ticker}</td>
      <td>
        <input
          class="bg-transparent border w-full focus:outline-0 focus:border-slate-800"
          type="number"
          min={0}
          value={stock.amount || 0}
          onInput={(e) => {
            changeAmount(stock.ticker, e.currentTarget.valueAsNumber || 0)
          }}
        />
      </td>
      <td>
        <Show when={!stock.fetched} fallback={'loading...'}>
          {stock.price}
        </Show>
      </td>
      <td>
        <Show when={!stock.fetched} fallback={'loading...'}>
          {stock.price}
        </Show>
      </td>
      <td>{stock.weight}</td>
    </tr>
  )
}
