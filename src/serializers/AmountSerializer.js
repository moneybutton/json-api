import { Serializer } from 'jsonapi-serializer'

const AmountSerializer = new Serializer('users', {
  attributes: [
    'amount',
    'currency',
    'satoshis'
  ]
})

export { AmountSerializer }
