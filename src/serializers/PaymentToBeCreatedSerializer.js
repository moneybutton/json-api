import { Serializer } from 'jsonapi-serializer'

const PaymentToBeCreatedSerializer = new Serializer('payments', {
  attributes: [
    'createdAt',
    'userId',
    'txid',
    'clientIdentifier',
    'normalizedTxid',
    'amount',
    'currency',
    'satoshis',
    'status',
    'statusDescription',
    'buttonId',
    'buttonData',
    'amountUsd',
    'inputAmountUsd',
    'inputAmountSatoshis',
    'spendAmountUsd',
    'spendAmountSatoshis',
    'feeAmountUsd',
    'feeAmountSatoshis',
    'changeAmountUsd',
    'changeAmountSatoshis',
    'paymentOutputs',
    'cryptoOperations'
  ],
  typeForAttribute (attribute, record) {
    if (attribute === 'payments') {
      return 'payments'
    } else if (attribute === 'paymentOutputs') {
      return 'payment-outputs'
    } else if (attribute === 'cryptoOperations') {
      return 'crypto-operations'
    } else {
      throw new Error('unrecognize relation')
    }
  },
  paymentOutputs: {
    ref: 'index',
    attributes: [
      'createdAt',
      'to',
      'amount',
      'currency',
      'satoshis',
      'type',
      'userId',
      'address',
      'script',
      'amountUsd',
      'userPaymail'
    ]
  },
  cryptoOperations: {
    ref: 'id',
    attributes: [
      'name',
      'method',
      'data',
      'dateEncoding',
      'value',
      'path',
      'algorithm'
    ]
  },
  transform: function (record) {
    return {
      ...record,
      paymentOutputs: record.paymentOutputs.map((po, index) => {
        return {
          ...po,
          index: index.toString()
        }
      }),
      cryptoOperations: record.cryptoOperations.map((co, index) => ({ ...co, id: index + 1 }))
    }
  }
})

export { PaymentToBeCreatedSerializer }
