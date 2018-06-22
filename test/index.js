import should from 'should'

import {
  toResourceObject,
  toNewResourceObject,
  fromResourceObject,
  fromResourceObjectsOfType,
  fromNewResourceObject,
  toJsonApiData,
  toJsonApiDataIncluding,
  toJsonApiErrors,
  toJsonApiError,
  toJsonApi,
  fromJsonApiData,
  fromJsonApiDataIncluding
} from '..'

describe('JSON API', () => {
  describe('#toResourceObject()', () => {
    it('should exist', () => {
      should.exist(toResourceObject)
    })
  })

  describe('#toNewResourceObject()', () => {
    it('should exist', () => {
      should.exist(toNewResourceObject)
    })
  })

  describe('#fromResourceObject()', () => {
    it('should exist', () => {
      should.exist(fromResourceObject)
    })
  })

  describe('#fromResourceObjectsOfType()', () => {
    it('should exist', () => {
      should.exist(fromResourceObjectsOfType)
    })
  })

  describe('#fromNewResourceObject()', () => {
    it('should exist', () => {
      should.exist(fromNewResourceObject)
    })
  })

  describe('#toJsonApiData()', () => {
    it('should exist', () => {
      should.exist(toJsonApiData)
    })
  })

  describe('#toJsonApiDataIncluding()', () => {
    it('should exist', () => {
      should.exist(toJsonApiDataIncluding)
    })
  })

  describe('#toJsonApiErrors()', () => {
    it('should exist', () => {
      should.exist(toJsonApiErrors)
    })
  })

  describe('#toJsonApiError()', () => {
    it('should exist', () => {
      should.exist(toJsonApiError)
    })
  })

  describe('#toJsonApi()', () => {
    it('should exist', () => {
      should.exist(toJsonApi)
    })
  })

  describe('#fromJsonApiData()', () => {
    it('should exist', () => {
      should.exist(fromJsonApiData)
    })
  })

  describe('#fromJsonApiDataIncluding()', () => {
    it('should exist', () => {
      should.exist(fromJsonApiDataIncluding)
    })
  })
})
