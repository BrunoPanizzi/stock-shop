import { Component, createSignal, Show } from 'solid-js'

import { stocks } from '../../store/stocksStore'

import decidePurchase from '../../utils/decidePurchase'
import rememberPrev from '../../utils/rememberPrev'

import Input from '../Input'
import Results from './Results'

const Shop: Component = () => {
  const [value, setValue] = createSignal('')

  const [results, setResults] = createSignal<Record<string, number>>()

  let formatInput = rememberPrev((prev: string, value: string) => {
    if (!isNaN(Number(value)) && value.trim() === value) {
      inpRef.value = value
      setValue(value)
      return value
    }
    inpRef.value = prev
    return prev
  })

  let inpRef: HTMLInputElement = null

  return (
    <>
      <h1 class="text-3xl font-bold mb-6">Let's buy some stocks?</h1>
      <label>
        <span class="mb-3 block">How much money would you like to invest?</span>
        <Input
          ref={inpRef}
          onInput={(e) => formatInput(e.currentTarget.value)}
        />
      </label>
      <button
        class="bg-emerald-500 mt-3 py-3 px-7 rounded-md text-lg font-bold"
        onClick={() => setResults(decidePurchase([...stocks], Number(value())))}
      >
        Calculate!
      </button>

      <Results results={results} clear={() => setResults()} />
    </>
  )
}
export default Shop
