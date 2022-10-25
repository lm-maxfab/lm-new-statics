interface ExtendedConnection {
  downlink?: number
}

interface ExtendedNavigator extends Navigator {
  mozConnection?: ExtendedConnection
  webkitConnection?: ExtendedConnection
  connection?: ExtendedConnection
}

export default function getCurrentDownlink (): number {
  const navigator = window.navigator as ExtendedNavigator|undefined
  if (navigator === undefined) return 10
  const connection = (
    navigator?.connection
    ?? navigator?.mozConnection
    ?? navigator?.webkitConnection
  ) as ExtendedConnection|undefined
  if (connection === undefined) return 10
  return connection.downlink ?? 10
}
