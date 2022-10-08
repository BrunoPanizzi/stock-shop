import { Component, ParentComponent, For, Show } from 'solid-js'

import { stocks } from '../../store/stocksStore'

import { StockRow } from './Row'

const HeaderLabel: ParentComponent = ({ children }) => (
  <th class="text-lg font-bold mb-2">{children}</th>
)

const Table: Component = () => {
  return (
    <div>
      <h1 class="font-bold text-3xl mb-6">Your stocks</h1>
      <Show
        when={stocks.length}
        fallback={
          <div class="text-center">
            <h3 class="font-semibold text-xl">You have no stocks yet</h3>
            <span>Try adding one down here!</span>
          </div>
        }
      >
        <table class="border w-full  table-fixed">
          <colgroup>
            <col class="w-34      bg-white bg-opacity-10" />
            <col class="          bg-white bg-opacity-5" />
            <col class="w-24      bg-white bg-opacity-10" />
            <col class="w-90      bg-white bg-opacity-5" />
            <col class="w-24      bg-white bg-opacity-10" />
          </colgroup>
          <thead class="border-b-2 ">
            <tr>
              <HeaderLabel>Ticker</HeaderLabel>
              <HeaderLabel>Amount</HeaderLabel>
              <HeaderLabel>Price</HeaderLabel>
              <HeaderLabel>Value</HeaderLabel>
              <HeaderLabel>Weight</HeaderLabel>
            </tr>
          </thead>
          <tbody>
            <For each={stocks}>{(stock) => <StockRow stock={stock} />}</For>
          </tbody>
        </table>
      </Show>
    </div>
  )
}

export default Table
