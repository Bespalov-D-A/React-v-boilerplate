const protocol = process.env.REACT_APP_CLIENT_PROTOCOL
const host = process.env.REACT_APP_CLIENT_HOST
const port = process.env.REACT_APP_CLIENT_PORT

export const config = {
  url: {
    client: `${protocol}://${host}:${port}`
  }
}

console.log('_________________________________')
console.log('_________________________________')
console.log(config)
