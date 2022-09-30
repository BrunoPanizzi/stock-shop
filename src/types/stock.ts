export interface stock {
  ticker: string
  amount: number
  weight: number
}

export interface stockWithPrice extends stock {
  price: number | null
  value: number
}
