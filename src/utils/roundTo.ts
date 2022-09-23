export default function roundTo(num: number, decimals: number) {
  const power = 10 ** decimals
  return Math.round(num * power) / power
}
