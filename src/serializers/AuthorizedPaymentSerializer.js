import { Serializer } from 'jsonapi-serializer'
import { paymentAttributes } from './PaymentSerializer'

const AuthorizedPaymentSerializer = new Serializer('spent-authorizations', {
  attributes: [
    'authorization',
    'paymentAttributes',
    'paymentOutputs',
    'cryptoOperations'
  ],
  typeForAttribute (attribute, record) {
    if (attribute === 'spent-authorizations') {
      return 'spent-authorizations'
    } else if (attribute === 'authorization') {
      return 'spent-authorizations'
    } else if (attribute === 'paymentAttributes') {
      return 'payment-attributes'
    } else if (attribute === 'paymentOutputs') {
      return 'payment-outputs'
    } else if (attribute === 'cryptoOperations') {
      return 'crypto-operations'
    } else {
      throw new Error(`unrecognize relation: ${attribute}`)
    }
  },
  paymentAttributes: {
    attributes: paymentAttributes
  },
  cryptoOperations: {
    ref: 'index',
    attributes: [
      'name',
      'method',
      'data',
      'dataEncoding',
      'value',
      'valueEncoding',
      'key',
      'algorithm',
      'publicKey',
      'paymail',
      'verified'
    ]
  },
  transform: (record) => {
    return {
      ...record,
      paymentOutputs: record.paymentOutputs.map((po, index) => {
        return {
          ...po,
          index: (index + 1).toString()
        }
      }),
      cryptoOperations: record.cryptoOperations.map((co, index) => ({ ...co, index: (index + 1).toString() }))
    }
  }
})

export { AuthorizedPaymentSerializer }
