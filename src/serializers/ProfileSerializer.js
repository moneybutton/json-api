import { Serializer } from 'jsonapi-serializer'

const ProfileSerializer = new Serializer('profiles', {
  attributes: [
    'createdAt',
    'name',
    'defaultCurrency',
    'defaultLanguage',
    'bio',
    'primaryPaymail'
  ],
  transform (record) {
    const handle = record.activeHandle
    return {
      ...record,
      primaryPaymail: `${handle.localPart}@${handle.domain}`
    }
  }
})

export { ProfileSerializer }
