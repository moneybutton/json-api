import { Serializer } from 'jsonapi-serializer'

const ProfileSerializer = new Serializer('profiles', {
  attributes: [
    'createdAt',
    'email',
    'name',
    'defaultCurrency',
    'defaultLanguage',
    'receiveEmails',
    'bio',
    'email',
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
