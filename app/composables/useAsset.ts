export function useAsset(path: string) {
  if (path.startsWith('https://') || path.startsWith('http://')) {
    return path
  }

  const config = useRuntimeConfig()
  const base = config.app.baseURL.replace(/\/$/, '')

  // Ensure the path always starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`

  return `${base}${cleanPath}`
}
