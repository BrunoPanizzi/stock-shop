import { Component, createSignal } from 'solid-js'

import Input from '../Input'

const Shop: Component = () => {
  const [value, setValue] = createSignal('')

  return (
    <div class="">
      <h1 class="text-3xl font-bold mb-6">Let's buy some stocks?</h1>
      <label>
        <span class="mb-3">How much money would you like to invest?</span>
        <Input type="number" onInput={(e) => setValue(e.currentTarget.value)} />
      </label>
      <button
        class="bg-emerald-500 py-3 px-7 rounded-md text-lg font-bold"
        onClick={() => console.log('clicking')}
      >
        Calculate!
      </button>
    </div>
  )
}

export default Shop
