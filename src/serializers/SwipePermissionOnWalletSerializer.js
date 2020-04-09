import { Serializer } from 'jsonapi-serializer'

const SwipePermissionOnWalletSerializer = new Serializer('spent-authorizations-on-wallet', {
  attributes: [
    'createdAt',
    'amount',
    'currency',
    'ownerId',
    'amountLeft',
    'app'
  ],
  typeForAttribute (attribute, _record) {
    if (attribute === 'spent-authorizations-on-wallet') {
      return 'spent-authorizations-on-wallet'
    } else if (attribute === 'app') {
      return 'apps'
    } else {
      throw new Error('unrecognize relation')
    }
  },
  app: {
    attributes: [
      'name',
      'url'
    ]
  }
})

export { SwipePermissionOnWalletSerializer }
