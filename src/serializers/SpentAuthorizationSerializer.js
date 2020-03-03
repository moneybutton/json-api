import { Serializer } from 'jsonapi-serializer'

const SpentAuthorizationsSerializer = new Serializer('spent-authorizations', {
  attributes: [
    'createdAt',
    'amount',
    'currency',
    'authToken',
    'amountLeft',
    'ownerId'
  ]
})

export { SpentAuthorizationsSerializer }
