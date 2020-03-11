import { Serializer } from 'jsonapi-serializer'

const SpentAuthorizationsSerializer = new Serializer('spent-authorizations', {
  attributes: [
    'createdAt',
    'amount',
    'currency',
    'authToken',
    'clientIdentifier',
    'amountLeft',
    'ownerId',
    'clientIdentifier'
  ]
})

export { SpentAuthorizationsSerializer }
