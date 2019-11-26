import { Serializer } from 'jsonapi-serializer'

const EmailVerificationSerializer = new Serializer('email-verifications', {
  attributes: [
    'email'
  ]
})

export { EmailVerificationSerializer }
