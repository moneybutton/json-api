import { Deserializer } from 'jsonapi-serializer'

const JsonDeserializer = new Deserializer({
  keyForAttribute: 'camelCase'
})

export { JsonDeserializer }
