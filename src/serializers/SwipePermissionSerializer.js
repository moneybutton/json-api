import { Serializer } from 'jsonapi-serializer'

const SwipePermissionSerializer = new Serializer('spent-authorizations', {
  attributes: [
    'createdAt',
    'amount',
    'currency',
    'authToken',
    'clientIdentifier',
    'ownerId'
  ]
})

export { SwipePermissionSerializer }
