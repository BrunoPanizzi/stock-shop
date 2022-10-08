import { Component, Show } from 'solid-js'

import rememberPrev from '../../utils/rememberPrev'

import { changeAmount, superStock } from '../../store/stocksStore'

interface rowProps {
  stock: superStock
}

export const StockRow: Component<rowProps> = ({ stock }) => {
  let inpRef: HTMLInputElement = null

  let formatInput = rememberPrev((prev: string, value: string) => {
    if (!isNaN(Number(value)) && value.trim() === value) {
      inpRef.value = value
      changeAmount(stock.ticker, Number(value) || 0)
      return value
    }
    inpRef.value = prev
    return prev
  })

  return (
    <tr>
      <td>{stock.ticker}</td>
      <td>
        <input
          class="bg-transparent border w-full focus:outline-0 focus:border-slate-800"
          min={0}
          value={stock.amount}
          onInput={(e) => formatInput(e.currentTarget.value)}
          ref={inpRef}
        />
      </td>
      <td>
        <Show when={stock.fetched} fallback={'loading...'}>
          {stock.price.toFixed(2)}
        </Show>
      </td>
      <td>
        <Show when={stock.fetched} fallback={'loading...'}>
          {stock.value.toFixed(2)}
        </Show>
      </td>
      <td>{stock.weight}</td>
    </tr>
  )
}
