import { Component } from 'solid-js'

import Header from './components/Header'
import Table from './components/Table'
import AddStock from './components/AddStock'

const App: Component = () => {
  return (
    <div class="bg-gradient-to-br from-slate-800 to-zinc-800 text-neutral-100 min-h-screen ">
      <main class="max-w-2xl m-auto py-6">
        <Header />
        <Table />
        <AddStock />
      </main>
    </div>
  )
}

export default App
