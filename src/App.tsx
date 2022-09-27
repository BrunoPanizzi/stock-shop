import { Component, createSignal } from 'solid-js'

import Header from './components/Header'
import Table from './components/Table'
import { addStock } from './store/stocksStore'

const App: Component = () => {
  const [newStock, setNewStock] = createSignal('')

  return (
    <div class="bg-gradient-to-br from-slate-800 to-zinc-800 text-neutral-100 min-h-screen ">
      <main class="max-w-2xl m-auto py-6">
        <Header />
        <Table />
        <form
          class="my-4 text-lg"
          onSubmit={(e) => {
            e.preventDefault()

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
      </main>
    </div>
  )
}

export default App
