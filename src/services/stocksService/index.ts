import { get } from '../httpClient'

const key = 'KHBL843F4JRIUOXK'
const baseUrl = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&'

function makeUrl(stock: string, key: string) {
  return `${baseUrl}apikey=${key}&symbol=${stock}.sao`
}

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
interface goodResponse {
  'Global Quote': options
}
interface errorResponse {
  Note: string
}
type response = goodResponse | errorResponse

export const getStock = async (ticker: string) => {
  const response = (await get(makeUrl(ticker, key))) as response
  // console.log(response)

  if (response['Note']) {
    // this means that the key has been used too many times
  }

  const data: options = response['Global Quote']

  return {
    ticker: data['01. symbol'],
    price: data['05. price'],
  }
}
