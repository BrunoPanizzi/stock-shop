import { Component, ParentComponent, For } from 'solid-js'

import { stocks } from '../../store/stocksStore'

import { StockRow } from './Row'

const HeaderLabel: ParentComponent = ({ children }) => (
  <th class="text-lg font-bold mb-2">{children}</th>
)

const Table: Component = () => {
  return (
    <table class="border w-full bg-white bg-opacity-10 table-fixed">
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
  )
}

export default Table
