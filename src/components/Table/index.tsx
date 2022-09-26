import {
  Component,
  ParentComponent,
  For,
  createResource,
  Show,
  ErrorBoundary,
} from 'solid-js'

import roundTo from '../../utils/roundTo'

import { stock } from '../../types/stock'

import { changeAmount, stocks } from '../../store/stocksStore'
import { getStock } from '../../services/stocksService'

const HeaderLabel: ParentComponent = ({ children }) => (
  <th class="text-lg font-bold mb-2">{children}</th>
)

interface rowProps {
  stock: stock
}
const StockRow: Component<rowProps> = ({ stock }) => {
  const [val, { refetch }] = createResource(() => {
    console.log('fetching')
    return getStock(stock.ticker)
  })

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
        <ErrorBoundary
          fallback={() => <button onClick={refetch}>retry</button>}
        >
          <Show when={!val.loading} fallback={'loading...'}>
            {val().price}
          </Show>
        </ErrorBoundary>
      </td>
      <td>{stock.weight}</td>
      <td>{roundTo(stock.amount * stock.price, 2)}</td>
    </tr>
  )
}

const Table: Component = () => {
  return (
    <table class="border w-full bg-white bg-opacity-10 table-fixed">
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
        <For each={stocks}>{(stock) => <StockRow stock={stock} />}</For>
      </tbody>
    </table>
  )
}

export default Table
