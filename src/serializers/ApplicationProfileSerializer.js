import { Serializer } from 'jsonapi-serializer'

const ApplicationProfileSerializer = new Serializer('users', {
  attributes: [
    'createdAt',
    'name',
    'url',
    'description',
    'oAuthIdentifier'
  ],
  transform: function (record) {
    return {
      ...record,
      oAuthIdentifier: record.publicClient.clientIdentifier
    }
  }
})

export { ApplicationProfileSerializer }
