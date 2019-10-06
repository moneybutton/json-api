import { Serializer } from 'jsonapi-serializer'

const PaymentSerializer = new Serializer('payments', {
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
    'rawtx',
    'cryptoOperations',
    'referrerUrl',
    'browserUserAgent'
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
      'paymailDt',
      'paymailPubkey',
      'paymailPurpose',
      'paymailRecipientHandle',
      'paymailSenderHandle',
      'paymailSenderName',
      'paymailSignature'
    ]
  },
  cryptoOperations: {
    ref: 'index',
    attributes: [
      'name',
      'method',
      'data',
      'dataEncoding',
      'value',
      'key',
      'algorithm',
      'publicKey'
    ]
  },
  transform: function (record) {
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

export { PaymentSerializer }
