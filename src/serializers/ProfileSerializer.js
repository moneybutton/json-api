import { Serializer } from 'jsonapi-serializer'

const ProfileSerializer = new Serializer('profiles', {
  attributes: [
    'createdAt',
    'name',
    'defaultCurrency',
    'defaultLanguage',
    'bio',
    'primaryPaymail',
    'avatarUrl'
  ],
  transform (record) {
    const handle = record.activeHandle
    return {
      ...record,
      primaryPaymail: `${handle.localPart}@${handle.domain}`,
      avatarUrl: `https://www.gravatar.com/avatar/${record.gravatarKey}?d=identicon` // This is done here because right no we have no notion of avatar in our backend.
    }
  }
})

export { ProfileSerializer }
