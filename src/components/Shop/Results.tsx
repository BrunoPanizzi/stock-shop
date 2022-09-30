import { Accessor, Component, Show } from 'solid-js'

import { setStocks } from '../../store/stocksStore'

interface props {
  results: Accessor<Record<string, number>>
  clear: () => void
}

const Results: Component<props> = ({ results, clear }) => {
  return (
    <Show when={results()}>
      <div class="my-3">
        <h3 class="font-bold text-lg">To balance your stocks you should:</h3>
        <ul class="my-2">
          {Object.keys(results()).map((s) => (
            <li>
              buy {results()[s]} {s}
            </li>
          ))}
        </ul>
        <button
          class="bg-neutral-200 text-emerald-700 rounded-md py-2 px-4 text-lg font-bold"
          onClick={() => {
            Object.keys(results()).forEach((s) =>
              setStocks(
                (stock) => stock.ticker === s,
                'amount',
                (amount) => amount + results()[s]
              )
            )
            clear()
          }}
        >
          Apply suggested purchase
        </button>
      </div>
    </Show>
  )
}

export default Results
