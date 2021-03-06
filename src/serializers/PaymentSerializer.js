import { Serializer } from 'jsonapi-serializer'

export const paymentAttributes = [
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
  'senderSignature',
  'signaturePubkey',
  'senderPaymail',
  'cryptoOperations',
  'referrerUrl',
  'browserUserAgent',
  'preserveOrder'
]

const PaymentSerializer = new Serializer('payments', {
  attributes: paymentAttributes,
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
      'valueEncoding',
      'key',
      'algorithm',
      'publicKey',
      'paymail',
      'verified'
    ]
  },
  transform: function (record) {
    const rawtx = Buffer.isBuffer(record.rawtx) ? record.rawtx.toString('hex') : record.rawtx
    return {
      ...record,
      paymentOutputs: record.paymentOutputs.map((po, index) => {
        return {
          ...po,
          index: (index + 1).toString()
        }
      }),
      cryptoOperations: record.cryptoOperations.map((co, index) => ({ ...co, index: (index + 1).toString() })),
      rawtx
    }
  }
})

export { PaymentSerializer }
