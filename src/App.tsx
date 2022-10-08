import { Component } from 'solid-js'

import Header from './components/Header'
import Table from './components/Table'
import AddStock from './components/AddStock'
import Shop from './components/Shop'

const App: Component = () => {
  return (
    <div class="bg-gradient-to-br from-slate-800 to-stone-800 text-neutral-100 min-h-screen ">
      <main class="max-w-6xl m-auto py-6 flex gap-6">
        {/* <Header /> */}
        <div class="flex-1">
          <Table />
          <AddStock />
        </div>
        <div class="flex-1">
          <Shop />
        </div>
      </main>
    </div>
  )
}

export default App
