const apiKey = '399W7T7MU4XPGPO9'
const baseUrl = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&'

const makeUrl = (stock: string, key: string) =>
  `${baseUrl}apikey=${key}&symbol=${stock}.sao`

interface options {
  '01. symbol': string
  '02. open': string
  '03. high': string
  '04. low': string
  '05. price': string
  '06. volume': string
  '07. latest trading day': string
  '08. previous close': string
  '09. change': string
  '10. change percent': string
}
interface stockResponse {
  'Global Quote': options
}

export const getStock = async (ticker: string) => {
  console.log('fetching', ticker)
  const response = await fetch(makeUrl(ticker, apiKey))
  const rawData = (await response.json()) as stockResponse
  const data: options = rawData['Global Quote']

  console.log(data['05. price'])
  return {
    ticker: data['01. symbol'],
    price: data['05. price'],
  }
}
