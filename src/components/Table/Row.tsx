import { Component, createResource, Switch, Match } from 'solid-js'

import roundTo from '../../utils/roundTo'

import { stock } from '../../types/stock'

import { changeAmount, setPrice } from '../../store/stocksStore'
import { getStock } from '../../services/stocksService'

interface rowProps {
  stock: stock
}
export const StockRow: Component<rowProps> = ({ stock }) => {
  const [info, { mutate, refetch }] = createResource(async () => {
    const res = await getStock(stock.ticker)
    setPrice(stock.ticker, Number(res.price))

    return res
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
        <Switch>
          <Match when={info.loading}>
            <>loading...</>
          </Match>
          <Match when={info.error}>
            <button
              class="bg-red-500"
              onClick={async () => mutate(await refetch())}
            >
              error!
            </button>
          </Match>
          <Match when={info()}>{info().price}</Match>
        </Switch>
      </td>
      <td>
        <Switch>
          <Match when={info.loading}>
            <>loading...</>
          </Match>
          <Match when={info.error}>
            <>error!</>
          </Match>
          <Match when={info()}>
            {roundTo(Number(info().price) * stock.amount, 2)}
          </Match>
        </Switch>
      </td>
      <td>{stock.weight}</td>
    </tr>
  )
}
