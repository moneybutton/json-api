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
  typeForAttribute (attribute, record) {
    return 'handles'
  },
  activeHandle: {
    ref: 'id',
    attributes: ['localPart', 'domain']
  }
})

export { UserSerializer }
