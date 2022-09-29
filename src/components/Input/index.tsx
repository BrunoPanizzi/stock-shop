import { Component } from 'solid-js'

interface props {
  type: 'text' | 'number'
  onInput: (
    e: InputEvent & {
      currentTarget: HTMLInputElement
      target: Element
    }
  ) => void
  maxLength?: number
  placeholder?: string
  ref?: HTMLInputElement
  value?: string
}

const Input: Component<props> = ({
  type,
  onInput,
  maxLength,
  placeholder,
  ref,
  value,
}) => {
  return (
    <input
      value={value || ''}
      ref={ref}
      class="focus:outline-0 border-2 border-white border-opacity-25 hover:border-opacity-40 focus:border-opacity-40 bg-white bg-opacity-10 mr-3 px-3 py-2 rounded-lg transition"
      type={type}
      onInput={onInput}
      maxLength={maxLength}
      placeholder={placeholder}
    />
  )
}

export default Input
