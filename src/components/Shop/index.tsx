import { Component, createSignal, Show } from 'solid-js'

import { stocks } from '../../store/stocksStore'

import decidePurchase from '../../utils/decidePurchase'

import Input from '../Input'
import Results from './Results'

const Shop: Component = () => {
  const [value, setValue] = createSignal('')

  const [results, setResults] = createSignal<Record<string, number>>()

  return (
    <>
      <h1 class="text-3xl font-bold mb-6">Let's buy some stocks?</h1>
      <label>
        <span class="mb-3">How much money would you like to invest?</span>
        <Input
          type="number"
          onInput={(e) => {
            setValue(e.currentTarget.value)
          }}
        />
      </label>
      <button
        class="bg-emerald-500 py-3 px-7 rounded-md text-lg font-bold"
        onClick={() => setResults(decidePurchase([...stocks], Number(value())))}
      >
        Calculate!
      </button>

      <Results results={results} clear={() => setResults()} />
    </>
  )
}
export default Shop
