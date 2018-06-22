
import JsonApiError from './json-api-error'

export function toResourceObject (id, type, attributes) {
  if (typeof id !== 'string') {
    throw new JsonApiError('Missing resource id.')
  }
  if (typeof type !== 'string') {
    throw new JsonApiError('Missing resource type.')
  }
  return {
    id,
    type,
    attributes
  }
}

export function toNewResourceObject (type, attributes) {
  if (typeof type !== 'string') {
    throw new JsonApiError('Missing resource type.')
  }
  return {
    type,
    attributes
  }
}

export function fromResourceObject (resource, resourceType) {
  let { id, type, attributes } = resource
  if (typeof id !== 'string') {
    throw new JsonApiError('Missing resource id.')
  }
  if (typeof type !== 'string') {
    throw new JsonApiError('Missing resource type.')
  }
  if (type !== resourceType) {
    throw new JsonApiError(`Wrong resource type. Expected ${resourceType} but found ${type}.`)
  }
  return { id, ...attributes }
}

export function fromNewResourceObject (resource, resourceType) {
  let { type, attributes } = resource
  if (typeof type !== 'string') {
    throw new JsonApiError('Missing resource type.')
  }
  if (type !== resourceType) {
    throw new JsonApiError(`Wrong resource type. Expected ${resourceType} but found ${type}.`)
  }
  return attributes
}

export function fromResourceObjectsOfType (resources, resourceType) {
  return resources
    .filter((resource) => resource.type === resourceType)
    .map((resource) => fromResourceObject(resource, resourceType))
}

export function fromNewResourceObjectsOfType (resources, resourceType) {
  return resources
    .filter((resource) => resource.type === resourceType)
    .map((resource) => fromNewResourceObject(resource, resourceType))
}

export function toJsonApiData (data) {
  return toJsonApi({ data })
}

export function toJsonApiDataIncluding (data, included) {
  return toJsonApi({ data, included })
}

export function toJsonApiErrors (errors) {
  return toJsonApi({ errors })
}

export function toJsonApiError (error) {
  return toJsonApiErrors([ error ])
}

export function toJsonApi (members) {
  return {
    ...members,
    jsonapi: {
      version: '1.0'
    }
  }
}

export function fromJsonApiData ({ data }) {
  if (typeof data !== 'object') {
    throw new JsonApiError('Missing data member.')
  }
  return data
}

export function fromJsonApiDataIncluding ({ data, included }) {
  if (typeof data !== 'object') {
    throw new JsonApiError('Missing data member.')
  }
  if (typeof included !== 'object') {
    throw new JsonApiError('Missing included member.')
  }
  return { data, included }
}

export { JsonApiError }
