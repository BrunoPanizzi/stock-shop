export async function get(path: string) {
  const response = await fetch(path)

  const contentType = response.headers.get('Content-Type')

  let body: unknown
  if (contentType?.includes('application/json')) {
    body = await response.json()
  }

  if (response.ok) return body

  throw new Error(`${response.status} - ${response.statusText}`)
}
