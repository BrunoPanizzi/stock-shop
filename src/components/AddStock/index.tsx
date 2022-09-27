import { Component, createSignal } from 'solid-js'

import { addStock } from '../../store/stocksStore'

import Input from '../Input'

const AddStock: Component = () => {
  const [newStock, setNewStock] = createSignal('')

  const handleSubmit = (e: Event) => {
    e.preventDefault()

    if (newStock().length < 5) return

    addStock({
      ticker: newStock().toUpperCase(),
      amount: 0,
      weight: 1,
    })
  }

  return (
    <form class="my-4 text-lg" onSubmit={handleSubmit}>
      <Input
        type="text"
        maxLength={6}
        onInput={(e) => setNewStock(e.currentTarget.value)}
        placeholder="New stock..."
      />
      <button
        type="submit"
        class="border-2 border-emerald-500 hover:border-emerald-400 focus:border-emerald-400 bg-emerald-700 px-5 py-2 rounded-lg transition"
      >
        Add
      </button>
    </form>
  )
}

export default AddStock
