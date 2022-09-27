import { Component, createSignal } from 'solid-js'

import { addStock } from '../../store/stocksStore'

const AddStock: Component = () => {
  const [newStock, setNewStock] = createSignal('')

  return (
    <form
      class="my-4 text-lg"
      onSubmit={(e) => {
        e.preventDefault()

        if (newStock().length < 5) return

        addStock({
          ticker: newStock().toUpperCase(),
          amount: 0,
          weight: 1,
        })
      }}
    >
      <input
        class="focus:outline-0 border-2 border-white border-opacity-25 hover:border-opacity-40 focus:border-opacity-40 bg-white bg-opacity-10 mr-3 px-3 py-2 rounded-lg transition"
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
