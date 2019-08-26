import { Serializer } from 'jsonapi-serializer'

const AmountSerializer = new Serializer('amounts', {
  attributes: [
    'amount',
    'currency',
    'satoshis'
  ]
})

export { AmountSerializer }
