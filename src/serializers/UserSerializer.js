import { Serializer } from 'jsonapi-serializer'

const UserSerializer = new Serializer('users', {
  attributes: [
    'createdAt',
    'updatedAt',
    'deletedAt',
    'activeWalletId',
    'email',
    'name',
    'defaultCurrency',
    'defaultLanguage',
    'emailVerified',
    'gravatarKey',
    'onboardingCompletedAt',
    'mnemonicBackedUpAt',
    'activeHandleId',
    'receiveEmails',
    'bio',
    'email',
    'activeHandle'
  ],
  typeForAttribute (attribute, _record) {
    if (attribute === 'users') {
      return 'users'
    } else if (attribute === 'activeHandle') {
      return 'handles'
    } else {
      throw new Error(`Unknown property ${attribute}`)
    }
  },
  activeHandle: {
    ref: 'id',
    attributes: ['localPart', 'domain']
  }
})

export { UserSerializer }
