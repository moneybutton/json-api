import { Serializer } from 'jsonapi-serializer'

const extractPaymailFrom = (paymentOutput) => {
  if (paymentOutput.user && paymentOutput.user.activeHandle) {
    const { localPart, domain } = paymentOutput.user.activeHandle
    return `${localPart}@${domain}`
  } else {
    return null
  }
}

const PaymentSerializer = new Serializer('payments', {
  attributes: [
    'createdAt',
    'userId',
    'txid',
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
    'paymentOutputs'
  ],
  typeForAttribute (attribute, record) {
    if (attribute === 'payments') {
      return 'payments'
    } else if (attribute === 'paymentOutputs') {
      return 'payment-outputs'
    } else {
      throw new Error('unrecognize relation')
    }
  },
  paymentOutputs: {
    ref: 'id',
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
  transform: function (record) {
    return {
      ...record,
      paymentOutputs: record.paymentOutputs.map(po => {
        extractPaymailFrom(po)
        return {
          ...po,
          userPaymail: extractPaymailFrom(po)
        }
      })
    }
  }
})

export { PaymentSerializer }
